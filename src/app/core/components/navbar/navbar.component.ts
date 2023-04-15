import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../../models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public menu: Menu[] = [];

  constructor() {
    this.menu = [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'People',
        url: '/people'
      },
      {
        name: 'Films',
        url: '/films'
      },
    ]
  }

}
