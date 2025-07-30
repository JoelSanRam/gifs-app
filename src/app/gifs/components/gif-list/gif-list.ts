import { Component, input } from '@angular/core';
import { GifListItem } from "./gif-list-item/gif-list-item";
import { Gif } from '../../interfaces/gif';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.css'
})
export class GifList {
  imgSrcList = input.required<Gif[]>() 
}
