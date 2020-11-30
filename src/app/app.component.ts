import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AutentifikacijaService } from './autentifikacija.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  odjaviSe(){
    this.authService.odjaviSe();
  }

  constructor(public authService: AutentifikacijaService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey:"AIzaSyCgJJkx88hSqNksxb_bi-HmrE_gpgyPzAY",
      authDomain: "autentifikacijaprimjer.firebaseapp.com"
    });
  }
  title = 'Angular Rutiranje';

 
}
