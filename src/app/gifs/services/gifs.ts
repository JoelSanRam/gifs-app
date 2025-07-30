import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Giphy } from '../interfaces/giphy';
import { Gif } from '../interfaces/gif';
import { GifMapper } from '../mapper/gifMapper';

@Injectable({
  providedIn: 'root'
})
export class Gifs {
  private http = inject(HttpClient)

  trendingGifs = signal<Gif[]>([])

  constructor() {
    this.loadTrendingGifs()
  }

  loadTrendingGifs() {
    this.http.get<Giphy>(`${environment.giphyBaseUrl}/gifs/trending`,{
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      }
    }).subscribe((resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data)
      this.trendingGifs.set(gifs)
      console.log(gifs)
    })
  }
  
}
