import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Utensilios } from 'src/model/utensilios';

@Component({
  selector: 'app-utensilios',
  templateUrl: './utensilios.page.html',
  styleUrls: ['./utensilios.page.scss'],
})
export class UtensiliosPage implements OnInit {

  listaUtensilios : Utensilios[] = [];

  constructor(private db: AngularFirestore,
    private router : Router) { }

  ngOnInit() {
    this.db.collection('utensilios').snapshotChanges().subscribe(response=>{ 

      this.listaUtensilios = [];
      response.forEach(doc=>{ 
      
        let u = new Utensilios();
        u.setUtensilios(doc.payload.doc.data(),doc.payload.doc.id);

        this.listaUtensilios.push(u);

      },err=>{
        console.log(err);
      })

    });
  }

  goPage(idValue : string){
    this.router.navigate(['utensilio-single',{id : idValue}]);
  }

}
