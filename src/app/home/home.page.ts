import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

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
    this.navCtrl.navigateForward(`/information`);

  }
}
