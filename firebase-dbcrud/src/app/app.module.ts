import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCg3v3qJH4D0mi90sPXC4p3giwmFft1AT4",
  authDomain: "crudder-angular.firebaseapp.com",
  projectId: "crudder-angular",
  storageBucket: "crudder-angular.appspot.com",
  messagingSenderId: "972625107460",
  appId: "1:972625107460:web:d56f9b17d78a20ba987351",
  measurementId: "G-Y86EQ7EC9F"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
