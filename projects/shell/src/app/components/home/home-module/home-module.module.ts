import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { homeReducer, reportsKey } from '../reducers/home-reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(reportsKey, homeReducer),
  ]
})
export class HomeModuleModule { }
