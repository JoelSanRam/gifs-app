import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebarmenu } from "../../components/sidebarmenu/sidebarmenu";
import { Sidebarmenuoptions } from "../../components/sidebarmenu/sidebarmenuoptions/sidebarmenuoptions";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Sidebarmenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
