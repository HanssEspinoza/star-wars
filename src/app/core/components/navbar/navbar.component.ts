import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../../models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{
  public menu: Menu[] = [];

  ngOnInit(): void {
    this.menu = [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'People',
        url: '/app/people'
      },
      {
        name: 'Films',
        url: '/app/films'
      },
    ]
  }

}
