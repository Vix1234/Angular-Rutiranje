import { Component, OnInit } from '@angular/core';
import { ServeriService } from '../serveri.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: { id: number, ime: string, status: string };

  constructor(private serveriService: ServeriService,
    private ruta: ActivatedRoute,
    private ruter: Router) { }

  ngOnInit() {
    const id = +this.ruta.snapshot.params['id'];
    this.server = this.serveriService.vratiServer(id);
    this.ruta.params
      .subscribe(
        (parametri: Params) => {
          this.server = this.serveriService.vratiServer(+parametri['id']);
        }
      );
  }

  promijeni() {
    this.ruter.navigate(['promijeni'], {relativeTo: this.ruta});
  }

}
