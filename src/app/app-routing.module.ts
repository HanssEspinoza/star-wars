import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth').then((m) => m.AuthModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./modules/home').then((m) => m.HomeModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
