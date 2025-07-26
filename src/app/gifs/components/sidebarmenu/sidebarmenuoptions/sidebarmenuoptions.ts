import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
