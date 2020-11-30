import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentifikacijaService } from './autentifikacija.service';

@Injectable({
  providedIn: 'root'
})
export class ZastitaService implements CanActivate {

  constructor(private authSerivs: AutentifikacijaService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authSerivs.prijavljen();
  }
}
