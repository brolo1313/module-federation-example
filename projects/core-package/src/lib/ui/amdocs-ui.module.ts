import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  declarations: [
    AppLoaderComponent
  ],
  exports: [AppLoaderComponent]
})
export class UiModule {
}
