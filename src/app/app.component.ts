import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Le envío esta información al html
  //para enviar la data uso {} en el html
  title = 'angular-utn';
  edad = 34;
}
