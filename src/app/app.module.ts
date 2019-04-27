import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import  firebaseConfig  from './firebase';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { IonicStorageModule } from '@ionic/storage';

import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ApolloModule,
    IonicStorageModule.forRoot(),
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { 
      // provide: APOLLO_OPTIONS,
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
