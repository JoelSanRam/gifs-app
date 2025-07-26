import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebarmenuheader',
  imports: [],
  templateUrl: './sidebarmenuheader.html',
  styleUrl: './sidebarmenuheader.css'
})
export class Sidebarmenuheader {
  envs = environment
}
