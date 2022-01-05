import { Component, OnInit } from '@angular/core';
//importamos el servicio
import { CatNinjaService } from 'src/app/cat-ninja.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private catNinjaService: CatNinjaService
    ) { }

    contenido: any;

    mostrarFact(){
      this.catNinjaService.getKittens().subscribe(data => {
        console.log(data);
        this.contenido = data;
      });
    }
    //onInit: cuando terminó de precargar la función
  ngOnInit(): void {
    //this.mostrarFact();
  }

}
