import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Giphy } from '../interfaces/giphy';
import { Gif } from '../interfaces/gif';
import { GifMapper } from '../mapper/gifMapper';
import { map, tap } from 'rxjs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs
}

@Injectable({
  providedIn: 'root'
})
export class Gifs {
  private http = inject(HttpClient)
  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(false)
  private trendingPage = signal(0)
  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i+=3) {
      groups.push(this.trendingGifs().slice(i, i + 3))
      
    }
    return groups
  })
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage())
  searchHistorykeys = computed(() => Object.keys(this.searchHistory()))

  constructor() {
    this.loadTrendingGifs()
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory())
    localStorage.setItem('gifs', historyString)
  })

  loadTrendingGifs() {
    if(this.trendingGifsLoading()) return;
    this.trendingGifsLoading.set(true)
    this.trendingPage.update((currentValue: number) => currentValue + 1)
    const offset = this.trendingPage() * 20
    this.http.get<Giphy>(`${environment.giphyBaseUrl}/gifs/trending`,{
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: offset
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data)
      this.trendingGifs.update(currentGifs => [
        ...currentGifs,
        ...gifs
      ])
      this.trendingGifsLoading.set(false)
    })
  }

  loadSearchGifs(query: string) {
    return this.http.get<Giphy>(`${environment.giphyBaseUrl}/gifs/search`,{
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: query
      }
    }).pipe(
      map(({data})=> data),
      map((items) => GifMapper.mapGiphyItemsToGifsArray(items)),
      tap(items => {
        this.searchHistory.update(history => ({
          ...history,
          [query.toLowerCase()]: items
        }))
      })
    )
    /* .subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data)
      // this.trendingGifs.set(gifs)
    }) */
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query] ?? []
  }
  
}
