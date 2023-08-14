import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { Mfe2Reducer } from './components/login/reducer/mfe2-reducers';
import { homeReducer } from 'projects/shell/src/app/components/home/reducers/home-reducers';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('mfe2State', Mfe2Reducer),
    StoreModule.forFeature('shellState', homeReducer)
  ]
})
export class AuthModule { }
