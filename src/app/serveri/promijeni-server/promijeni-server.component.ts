import { Component, OnInit } from '@angular/core';
import { ServeriService } from '../serveri.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-promijeni-server',
  templateUrl: './promijeni-server.component.html',
  styleUrls: ['./promijeni-server.component.css']
})
export class PromijeniServerComponent implements OnInit {

  server: { id: number, ime: string, status: string };
  serverIme = '';
  serverStatus = '';

  constructor(private serveriService: ServeriService,
    private ruta: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.ruta.snapshot.queryParams);
    console.log(this.ruta.snapshot.fragment);
    this.ruta.queryParams
    .subscribe(
      //neki kod
    );
    this.ruta.fragment
    .subscribe(
      //neki kod
    );
    this.server = this.serveriService.vratiServer(1);
    this.serverIme = this.server.ime;
    this.serverStatus = this.server.status;
  }

  onAzurirajServer() {
    this.serveriService.azurirajServer(this.server.id, { ime: this.serverIme, status: this.serverStatus });
  }

}
