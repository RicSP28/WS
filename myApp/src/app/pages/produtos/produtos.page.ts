import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/model/produtos';
import { AngularFirestore } from '@angular/fire/firestore';

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
    this.db.collection('produtos').snapshotChanges().subscribe(response=>{ 

      this.listaProdutos = [];
      response.forEach(doc=>{ 
      
        let p = new Produtos();
        p.setProdutos(doc.payload.doc.data(),doc.payload.doc.id);

        this.listaProdutos.push(p);

      },err=>{
        console.log(err);
      })

    });
  }

  goPage(idValue : string){
    this.router.navigate(['produto-single',{id : idValue}]);
  }
}
