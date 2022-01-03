import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travel-card',
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent implements OnInit {

  constructor() { }
  // El valor predeterminado de la imagen es "assets/images/etc.."
  @Input() imagen = "assets/images/naruto.jpg";
  @Input() categoria?: string;
  @Input() titulo = "FALTA TITULO";
  @Input() ofertaInfalible= false;
  @Input() precio = 1230;

  ngOnInit(): void {
  }

}
