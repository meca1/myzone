import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username:string = ""
  password: string = ""
  cpassword: string = ""

  constructor( public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword } = this
    if (password !== cpassword){ 
      console.log("passwords don't mach") 
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + 'codedamn.com', password)
    } catch (error) {
      
    }
  }

}
