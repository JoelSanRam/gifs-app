import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { Gifs } from '../../services/gifs';
import { Gif } from '../../interfaces/gif';

@Component({
  selector: 'app-search',
  imports: [GifList],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export default class Search {
  gifsService = inject(Gifs)
  gifs = signal<Gif[]>([])

  onSearch(query: string) {
    console.log(query)
    // return
    this.gifsService.loadSearchGifs(query).subscribe((resp) => {
      this.gifs.set(resp)
    })
  }
}

