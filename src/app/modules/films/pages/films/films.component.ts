import { Component } from '@angular/core';
import { FilmsService } from '../../services';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  constructor(private filmsService:FilmsService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.filmsService.getFilms().subscribe()
  }
}
