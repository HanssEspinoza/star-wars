import { Component, OnInit } from '@angular/core';

import { People } from 'src/app/core';
import { PeopleService } from '../../services';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService:PeopleService) {}
  public people: People[] = [];

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      (resp: People[]) => {
        this.people = resp;
      }
    )
  }

}
