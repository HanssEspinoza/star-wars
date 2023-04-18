import { Component, OnInit, inject } from '@angular/core';

import { AllPeople } from 'src/app/core';
import { PeopleService } from '../../services';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {
  public allPeople?: AllPeople;
  public idPeople: string[] = [];

  private peopleService = inject(PeopleService);

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      (resp: AllPeople) => {
        this.allPeople = resp;
        this.idPeople = resp.results.map(url => url.url.split('/')[5]);
      }
    )
  }

}
