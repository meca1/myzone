import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  constructor(
    public  alert: AlertController,
  ) { }
  goToSignup(){
    this.showAlert()
  }
  // goToSignup1(){
  //   this.showAlert("Success!", "Welcome aboard!")
  // }
  // goToSignup2(){
  //   this.showAlert("Success!", "Welcome aboard!")
  // }
  // goToSignup3(){
  //   this.showAlert("Success!", "Welcome aboard!")
  // }
  // goToSignup4(){
  //   this.showAlert("Success!", "Welcome aboard!")
  // }
   
   
  ngOnInit() {
  }
  async showAlert() {
    const alert = await this.alert.create({
      header: 'Item',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'silla',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'farola',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'arboles',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'arcos de baloncesto',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'arcos de futbol',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('profe no sea si pasenos vea que tenemos que hacer la otra app y no tenemos mucho tiempo');
          }
        }
      ]
    });

    await alert.present();
  } 

}


