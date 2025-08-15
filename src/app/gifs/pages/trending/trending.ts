import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { Gifs } from '../../services/gifs';

@Component({
  selector: 'app-trending',
  // imports: [GifList],
  templateUrl: './trending.html',
  styleUrl: './trending.css'
})
export default class Trending {
  gifService = inject(Gifs)
  scrollDivRf = viewChild<ElementRef>('groupDiv')

  onScroll (event: Event){
    const scrollDiv = this.scrollDivRf()?.nativeElement;
    if(!scrollDiv) return;
    const scrollTop = scrollDiv.scrollTop
    const clientHeight = scrollDiv.clientHeight
    const scrollHeight = scrollDiv.scrollHeight
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight
    if(isAtBottom){
      this.gifService.loadTrendingGifs()
    }
    console.log(isAtBottom)
  }

}
