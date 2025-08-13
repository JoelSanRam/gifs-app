import { Component, inject, signal } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { Gifs } from '../../services/gifs';

@Component({
  selector: 'app-trending',
  imports: [GifList],
  templateUrl: './trending.html',
  styleUrl: './trending.css'
})
export default class Trending {
  gifService = inject(Gifs)
  // gifs = signal(imageUrls)


}
