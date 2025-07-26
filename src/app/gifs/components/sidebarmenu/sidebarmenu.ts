import { Component } from '@angular/core';
import { Sidebarmenuheader } from "./sidebarmenuheader/sidebarmenuheader";
import { Sidebarmenuoptions } from "./sidebarmenuoptions/sidebarmenuoptions";

@Component({
  selector: 'app-sidebarmenu',
  imports: [Sidebarmenuheader, Sidebarmenuoptions],
  templateUrl: './sidebarmenu.html',
  styleUrl: './sidebarmenu.css'
})
export class Sidebarmenu {

}
