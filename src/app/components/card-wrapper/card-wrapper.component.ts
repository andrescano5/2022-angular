import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

tarjetas= [
  {
    imagen : "assets/images/paris.jpg",
  categoria : "Vuelo",
  titulo : "Viaja a Paris",
  ofertaInfalible : false,
  precio : 500000,
  },
  {
    imagen : "assets/images/medellin.jpg",
  categoria : "Hotel",
  titulo : "Viaja Medellín",
  ofertaInfalible : true,
  precio : 425000,
  },
  {
    imagen : "assets/images/cabral.jpg",
  categoria : "Vuelo",
  titulo : "Viaja a Arroyo Cabral Wacho!!",
  ofertaInfalible : true,
  precio : 3000,
  },
  {
    imagen : "assets/images/images.jpg",
  categoria : "Resto-bar",
  titulo : "Pasá por Vintrash",
  ofertaInfalible : false,
  precio : 500000,
  }
]

  //Preparo los datos a enviar
  // imagen = "assets/images/naruto.jpg";
  // categoria = "Vuelo";
  // titulo = "Viaja a Paris";
  // ofertaInfalible = false;
  // precio = 500000;

  constructor() { }

  ngOnInit(): void {
  }

}
