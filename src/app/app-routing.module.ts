import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocetnaComponent } from "./pocetna/pocetna.component";
import { ServeriComponent } from "./serveri/serveri.component";
import { ServerComponent } from "./serveri/server/server.component";
import { PromijeniServerComponent } from "./serveri/promijeni-server/promijeni-server.component";
import { KorisniciComponent } from "./korisnici/korisnici.component";
import { KorisnikComponent } from "./korisnici/korisnik/korisnik.component";
import { NijePronadjenoComponent } from "./nije-pronadjeno/nije-pronadjeno.component";
import { LoginComponent } from './autentifikacija/login/login.component';
import { SignupComponent } from './autentifikacija/signup/signup.component';
import { ZastitaService } from './zastita.service';

const routes:Routes = [
  {path: '', component: PocetnaComponent},
  {path: 'serveri', component: ServeriComponent, canActivate: [ZastitaService], children:[
    {path: ':id', component: ServerComponent},
    {path: ':id/promijeni', component: PromijeniServerComponent}  
  ]},
  {path: 'korisnici', component: KorisniciComponent, children: [
    {path: ':id/:ime', component: KorisnikComponent}
  ]},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'nijepronadjena' , component: NijePronadjenoComponent},
  {path: '**' , redirectTo: '/nijepronadjena'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
