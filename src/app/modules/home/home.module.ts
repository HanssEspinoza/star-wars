import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components';
import { NavbarComponent, SpinnerComponent } from 'src/app/core';
import { PrincipalComponent } from './pages/principal/principal.component';


@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponent,
    SpinnerComponent
  ]
})
export class HomeModule { }
