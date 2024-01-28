import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-display-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './display-header.component.html',
  styleUrl: './display-header.component.css'
})
export class DisplayHeaderComponent {

}
