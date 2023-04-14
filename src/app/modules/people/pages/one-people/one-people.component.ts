import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/core';

import { PeopleService } from '../../services';

@Component({
  selector: 'app-one-people',
  templateUrl: './one-people.component.html',
  styleUrls: ['./one-people.component.scss']
})
export class OnePeopleComponent {
  public onePeople?: People;

  constructor(
    private peopleService:PeopleService,
    private activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    let id: any;
    const persona = this.activatedRoute.params.subscribe(params => id = params['id']);

    this.getOnePeople(id);
  }

  getOnePeople(id: any) {
    this.peopleService.getOnePeople(id).subscribe(
      (resp: People) => {
        this.onePeople = resp;
        console.log(this.onePeople);
      }
    )
  }

}
