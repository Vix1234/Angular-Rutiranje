import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutentifikacijaService } from 'src/app/autentifikacija.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private autServis:AutentifikacijaService) { }

  ngOnInit(): void {
  }

  registrujSe(forma:NgForm){
    const email = forma.value.email;
    const pass=forma.value.password;
    this.autServis.registrujKorisnika(email,pass);    
  }
}
