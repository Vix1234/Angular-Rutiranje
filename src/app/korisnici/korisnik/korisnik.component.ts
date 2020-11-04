import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-korisnik',
  templateUrl: './korisnik.component.html',
  styleUrls: ['./korisnik.component.css']
})
export class KorisnikComponent implements OnInit {

  korisnik: { id: number, ime: string };

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.korisnik = {
      id: this.ruta.snapshot.params['id'],
      ime: this.ruta.snapshot.params['ime']
    };
    this.ruta.params
      .subscribe(
        (parametri: Params) => {
          this.korisnik.id = parametri['id'];
          this.korisnik.ime = parametri['ime'];
        }
      );
  }

}
