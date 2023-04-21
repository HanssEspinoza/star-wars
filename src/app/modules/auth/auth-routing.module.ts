import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent, SignOutComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
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
