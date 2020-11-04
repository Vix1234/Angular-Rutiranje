import { Component, OnInit } from '@angular/core';
import { ServeriService } from './serveri.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serveri',
  templateUrl: './serveri.component.html',
  styleUrls: ['./serveri.component.css']
})
export class ServeriComponent implements OnInit {

  public serveri: { id: number, ime: string, status: string }[] = [];

  constructor(private serveriService: ServeriService,
    private ruter: Router,
    private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.serveri = this.serveriService.vratiServere();
  }

  ucitaj() {
    this.ruter.navigate(['serveri'], { relativeTo: this.ruta});
  }

}
