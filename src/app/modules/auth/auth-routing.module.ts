import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, SignOutComponent } from './pages';
import { RedirectGuard } from '../../core';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    canActivate: [RedirectGuard]
  },
  {
    path: 'sign-out',
    component: SignOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
