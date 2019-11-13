import { Component, OnInit } from '@angular/core';
import { Utensilios } from 'src/model/utensilios';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-utensilio-single',
  templateUrl: './utensilio-single.page.html',
  styleUrls: ['./utensilio-single.page.scss'],
})
export class UtensilioSinglePage implements OnInit {
  id: string;
  formGroup: FormGroup;
  utensilios: Utensilios = new Utensilios();
  imagem: any;
  idimg: string;

  constructor(private actRoute: ActivatedRoute,
    private auth: AngularFireAuth,
    private formB: FormBuilder,
    private db: AngularFirestore,
    private router: Router,
    public firestorage: AngularFireStorage) { 
      this.id = this.actRoute.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.db.collection("utensilios")
      .doc(this.id).get().subscribe(response => {

        this.utensilios.id = this.id;
        //this.downloadImage();
        this.utensilios.nome = response.data().nome;
        this.utensilios.estoque = response.data().estoque;
        this.utensilios.descricao = response.data().descricao;
        this.utensilios.preco = response.data().preco;
        this.utensilios.imagem = response.data().imagem;
      })
  }

  loadUtensilios() {
    this.db.collection("utensilios").doc(this.id).get().subscribe(response => {
      if (response.exists == false) {
        this.nUtensilios();
      } else {
        this.utensilios;
      }
    })
  }

  nUtensilios() {
    let json = {
      nome: "",
      estoque: "",
      descricao: "",
      preco: "",
    }
    this.db.collection('utensilios').doc(this.id).set(json).then(() => { })
  }


  carrinho() {
    this.router.navigate(['carrinho']);
  }


  downloadImage() {
    let ref = this.firestorage.storage.ref().child(`produtos/${this.id}.jpg`);
    ref.getDownloadURL().then(url => {
      this.imagem = url;
    })
  };

}
