import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmsService } from '../../services';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit{

  constructor(
    private filmsService:FilmsService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id: any;
    const film = this.activatedRoute.params.subscribe(params => id = params['id']);

    this.getFilm(id);
  }

  getFilm(id: any) {
    return this.filmsService.getFilm(id).subscribe()
  }

}
