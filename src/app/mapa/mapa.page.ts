import { Component, OnInit } from '@angular/core';
import { Marcador } from '../class/marcador';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage  {

  marcadores : Marcador[] = [];
  title: string = 'Localización';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    public route: Router,
    ) {
    const nuevoMarcador = new Marcador (51.678418, -7.809007)
    this.marcadores.push(nuevoMarcador);
    
  }

  agregarMarcador(evento){
    console.log(evento);
    console.log(evento.coords.lat);
    console.log(evento.coords.lng);
    const nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);

}
goToSignup(){
  this.route.navigate(['/inventario'])
}
}





