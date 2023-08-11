import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.scss']
})
export class AppLoaderComponent {

  @Input() showOverlay?: boolean;
  @Input() loaderClass?: string;

  constructor(){}
}
 