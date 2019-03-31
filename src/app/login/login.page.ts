import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  username: string = ""
  password: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public route: Router,
  ) { }

  ngOnInit() {
  }
  goToSignup(){
    this.route.navigate(['/register'])
  }
   async login() {
    const { username, password } = this
    try{
      const res = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(username, password) 
      console.log(res);
      this.route.navigate(['/home'])
    }catch(err){
      console.dir(err)
      if(err.code ==="auth/operation-not-allowed") {
        console.log("user not found ");
      }
    }
  }
}
