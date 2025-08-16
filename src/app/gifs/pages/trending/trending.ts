import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { Gifs } from '../../services/gifs';
import { ScrollStateService } from 'src/app/shared/services/scrollStateService';

@Component({
  selector: 'app-trending',
  // imports: [GifList],
  templateUrl: './trending.html',
  styleUrl: './trending.css'
})
export default class Trending implements AfterViewInit {
  scrollStateService = inject(ScrollStateService)
  gifService = inject(Gifs)
  scrollDivRf = viewChild<ElementRef>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRf()?.nativeElement;
    if(!scrollDiv) return
    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState()
  }

  onScroll (event: Event){
    const scrollDiv = this.scrollDivRf()?.nativeElement;
    if(!scrollDiv) return;
    const scrollTop = scrollDiv.scrollTop
    const clientHeight = scrollDiv.clientHeight
    const scrollHeight = scrollDiv.scrollHeight
    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight
    this.scrollStateService.trendingScrollState.set(scrollTop)
    if(isAtBottom){
      this.gifService.loadTrendingGifs()
    }
    console.log(isAtBottom)
  }

}
