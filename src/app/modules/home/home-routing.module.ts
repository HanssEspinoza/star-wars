import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components';
import { PrincipalComponent } from './pages/principal';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: PrincipalComponent
      },
      {
        path: 'people',
        loadChildren: () => import('../people').then((m) => m.PeopleModule)
      },
      {
        path: 'films',
        loadChildren: () => import('../films').then((m) => m.FilmsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
