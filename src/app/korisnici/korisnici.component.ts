import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  korisnici = [
    {
      id: 1,
      ime: 'Mirko'
    },
    {
      id: 2,
      ime: 'Darko'
    },
    {
      id: 3,
      ime: 'Ana'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
