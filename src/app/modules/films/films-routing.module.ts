import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent, FilmsComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent
  },
  {
    path: ':id',
    component: FilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
