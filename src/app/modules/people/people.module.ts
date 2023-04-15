import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from '@angular/cdk/table';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './pages';
import { OnePeopleComponent } from './pages/one-people/one-people.component';


@NgModule({
  declarations: [
    PeopleComponent,
    OnePeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CdkTableModule
  ]
})
export class PeopleModule { }
