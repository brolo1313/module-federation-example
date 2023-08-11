import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { UiModule } from 'projects/core-package/src/lib/ui/amdocs-ui.module';


@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    UiModule
  ]
})
export class BookModule { }
