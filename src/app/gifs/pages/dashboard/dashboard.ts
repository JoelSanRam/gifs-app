import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebarmenu } from "../../components/sidebarmenu/sidebarmenu";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Sidebarmenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export default class Dashboard {

}
