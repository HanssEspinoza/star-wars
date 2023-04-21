import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent, AuthHeaderComponent } from './components/';
import { SignOutComponent } from './pages/sign-out/sign-out.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    SignOutComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthHeaderComponent,
    LoginFormComponent,
  ]
})
export class AuthModule { }
