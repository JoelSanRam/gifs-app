import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebarmenu } from "../../components/sidebarmenu/sidebarmenu";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Sidebarmenu, NgClass],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

}
