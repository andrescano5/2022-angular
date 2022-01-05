import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatNinjaService {

  //Definimos de manera predeterminada que vamos a estar usando HttpClient y que lo vamos a llamar "http"
  constructor(
    private http: HttpClient
  ) { }

  //Construir la URl(endpoint) de llamada
  fetchUrl = "https://catfact.ninja/fact";

  getKittens (){
    return this.http.get(this.fetchUrl);
  }


}
