import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Le envío esta información al html
  //para enviar la data uso {{nombre del dato}} en el html
  title = 'angular-utn';
  edad = 34;
  numeros=[23,22,19,13,27,11];
}
