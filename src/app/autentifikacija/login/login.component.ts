import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutentifikacijaService } from 'src/app/autentifikacija.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private autent:AutentifikacijaService) { }

  ngOnInit(): void {
  }

  prijaviSe(forma:NgForm){
    this.autent.prijaviKorisnika(forma.value.email, forma.value.password);   
  }
}
