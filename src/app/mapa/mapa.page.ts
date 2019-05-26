import { Component, OnInit } from '@angular/core';
import { Marcador } from '../class/marcador';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage  {
  id = this.ruta.snapshot.paramMap.get('id');
  name = this.ruta.snapshot.paramMap.get('name');
  longitud = this.ruta.snapshot.paramMap.get('longitud');
  rates: any[];
  loading = true;
  error: any;
  dato:string="";
  marcadores : Marcador[] = [];
  title: string = 'Localización';
  lat: number = parseFloat(this.id);
  lng: number = parseFloat(this.longitud);
  
  
 
  constructor(
    public route: Router,
    private apollo: Apollo,
    private navCtrl: NavController,
    private ruta: ActivatedRoute,s
    ) {
    const nuevoMarcador = new Marcador (this.lat, this. lng)
    this.marcadores.push(nuevoMarcador);
    
  }
  ngOnInit() {
    this.detalleParque();
  }
  detalleParque(){
    this.apollo
    .watchQuery({
      query: gql`
        {
          Park(id:"cjvagduv2007201866yeegnfp"){
            name
            ciudad
            pais
            latitud
            longitud
          }
        }
      `,
    })
    .valueChanges.subscribe((result: ApolloQueryResult<any>) => {
      
      console.log(this.rates);
      this.rates = result.data && result.data.Park;
      this.loading = result.loading;
      this.error = result.errors;
    });
    
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









