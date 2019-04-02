import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    private navCtrl: NavController
  ){}
  pushUserNavCtrl(){
    //this.navCtrl.navigateForward(`/user/${ this.valor }`);
    this.navCtrl.navigateForward(`/mapa`);

  }
}
