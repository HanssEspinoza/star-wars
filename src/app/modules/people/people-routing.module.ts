import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePeopleComponent, PeopleComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },
  {
    path: ':id',
    component: OnePeopleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
