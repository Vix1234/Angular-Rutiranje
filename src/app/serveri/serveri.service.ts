import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeriService {

  constructor() { }

  private serveri = [
    {
      id: 1,
      ime: 'Produkcija',
      status: 'aktivan'
    },
    {
      id: 2,
      ime: 'Testiranje',
      status: 'neaktivan'
    },
    {
      id: 3,
      ime: 'Devserver',
      status: 'neaktivan'
    }
  ];

  vratiServere() {
    return this.serveri;
  }

  vratiServer(id: number) {
    const server = this.serveri.find(
      (s) => {
        return s.id === id;
      }
    );
    return server;
  }

  azurirajServer(id: number, serverInfo: {ime: string, status: string}) {
    const server = this.serveri.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.ime = serverInfo.ime;
      server.status = serverInfo.status;
    }
  }
}
