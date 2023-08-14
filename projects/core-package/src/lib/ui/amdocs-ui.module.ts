import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



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
    AppLoaderComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [AppLoaderComponent, FooterComponent,HeaderComponent]
})
export class UiModule {
}
