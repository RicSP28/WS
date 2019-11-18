import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from 'src/model/produtos';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.page.html',
  styleUrls: ['./home-app.page.scss'],
})
export class HomeAppPage implements OnInit {

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

  goSingle(idValue : string){
    this.router.navigate(['produto-single',{id : idValue}]);
  }

  goProdutos(){
    this.router.navigate(['produtos']);
  }

  goPerfil(){
    this.router.navigate(['perfil']);
  }

  goFeed(){
    this.router.navigate(['feedback']);
  }

  goCart(){
    this.router.navigate(['cart']);
  }

}
