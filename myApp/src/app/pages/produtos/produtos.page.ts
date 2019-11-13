import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/model/produtos';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  listaProdutos : Produtos[] = [];

  constructor(private db: AngularFirestore,
    private router : Router) { }

  ngOnInit() {
   
  }

  goInsumos(){
    this.router.navigate(['insumos']);
  }

  goUtensilios(){
    this.router.navigate(['utensilios']);
  }  

}
