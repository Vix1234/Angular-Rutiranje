import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { NijePronadjenoComponent } from './nije-pronadjeno/nije-pronadjeno.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ServeriComponent } from './serveri/serveri.component';
import { PromijeniServerComponent } from './serveri/promijeni-server/promijeni-server.component';
import { ServerComponent } from './serveri/server/server.component';
import { KorisnikComponent } from './korisnici/korisnik/korisnik.component';
import { ServeriService } from './serveri/serveri.service';
import { LoginComponent } from './autentifikacija/login/login.component';
import { SignupComponent } from './autentifikacija/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    KorisniciComponent,
    NijePronadjenoComponent,
    PocetnaComponent,
    ServeriComponent,
    PromijeniServerComponent,
    ServerComponent,
    KorisnikComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule    
  ],
  providers: [ServeriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
