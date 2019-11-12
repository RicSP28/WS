import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  
  }

  goInsumos(){
    this.router.navigate(['insumos']);
  }

  goUtensilios(){
    this.router.navigate(['utensilios']);
  }  

}
