import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {
  
  token:string;  
  
  constructor(private router: Router) { }

  prijaviKorisnika(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
          (response) => {
            this.router.navigate(['/']);                
            firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            )
        }
        )
        .catch(
            (error) => console.log(error)
        )
  }
  
  prijavljen(){
    return this.token != null;
  }

  odjaviSe(){
    firebase.auth().signOut();
    this.token = null; 
    this.router.navigate(['/login']);   
  }
  
  
  registrujKorisnika(email:string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (error) => console.log(error)
      )
  }

 
  
  
  

  

  

  
  vratiToken(){
    firebase.auth().currentUser.getIdToken()
    .then(
      (token:string) => this.token = token
    )

    return this.token;
  }



  


}

