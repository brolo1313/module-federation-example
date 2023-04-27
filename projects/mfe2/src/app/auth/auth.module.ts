import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { homeReducer, reportsKey } from 'projects/shell/src/app/components/home/reducers/home-reducers';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(reportsKey, homeReducer),
  ]
})
export class AuthModule { }
