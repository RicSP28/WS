import { Component, OnInit } from '@angular/core';
import { Insumos } from 'src/model/insumos';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.page.html',
  styleUrls: ['./insumos.page.scss'],
})
export class InsumosPage implements OnInit {

  listaInsumos : Insumos[] = [];

  constructor(private db: AngularFirestore,
    private router : Router) { }

  ngOnInit() {
    this.db.collection('insumos').snapshotChanges().subscribe(response=>{ 

      this.listaInsumos = [];
      response.forEach(doc=>{ 
      
        let i = new Insumos();
        i.setInsumos(doc.payload.doc.data(),doc.payload.doc.id);

        this.listaInsumos.push(i);

      },err=>{
        console.log(err);
      })

    });
  }

  goPage(idValue : string){
    this.router.navigate(['insumos-detalhe',{id : idValue}]);
  }

}
