import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../../models';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{
  public menu: Menu[] = [];

  public faRightFromBacket = faRightFromBracket;

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
