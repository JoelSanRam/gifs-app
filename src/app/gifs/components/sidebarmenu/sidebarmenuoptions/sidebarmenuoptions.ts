import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Gifs } from 'src/app/gifs/services/gifs';

interface MenuOption {
  icon: string,
  label: string,
  route: string
  sublabel: string
}

@Component({
  selector: 'app-sidebarmenuoptions',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebarmenuoptions.html',
  styleUrl: './sidebarmenuoptions.css'
})
export class Sidebarmenuoptions {
  gifsService = inject(Gifs)


  menuOptios:MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs populares',
      route: '/dashboard/treanding'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search'
    }
  ]

}
