import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
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
      }
    )
  }

  goBack() {
    this.router.navigateByUrl('/people');
  }

}
