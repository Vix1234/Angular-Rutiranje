import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ucitavanjeServera(id: number){
    //kompleksan kod
    this.router.navigate(['/serveri', id, 'promijeni'], 
    {queryParams: {dozvoliPromjenu: '1'}, fragment: 'ucitavanje'});
  }

}
