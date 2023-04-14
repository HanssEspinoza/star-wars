import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './pages';
import { FilmComponent } from './pages/film/film.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
