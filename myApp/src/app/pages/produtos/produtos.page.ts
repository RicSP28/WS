import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/model/produtos';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  produtos: Array<{nome: string}>;
  allProdutos: any;
  queryText: string;

  constructor() {
    this.queryText = "";
    this.produtos = [
      {nome: 'Insumos'},
      {nome: 'Utensílios'}
    ];
    this.allProdutos = this.produtos;
   }

   filterProduto(prod: any){
     let val = prod.target.value;
     if(val && val.trim() != ''){
       this.produtos = _.values(this.allProdutos);
       this.produtos = this.produtos.filter((produto) =>{
         return(produto.nome.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
       })
     } else {
       this.produtos = this.allProdutos;
     }
   }


  ngOnInit() {
   
  }

  goInsumos(){
    //this.router.navigate(['insumos']);
  }

  goUtensilios(){
   //this.router.navigate(['utensilios']);
  }  

}
