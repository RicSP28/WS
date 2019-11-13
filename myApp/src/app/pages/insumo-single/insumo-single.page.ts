import { Component, OnInit } from '@angular/core';
import { Insumos } from 'src/model/insumos';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-insumo-single',
  templateUrl: './insumo-single.page.html',
  styleUrls: ['./insumo-single.page.scss'],
})
export class InsumoSinglePage implements OnInit {
  id: string;
  formGroup: FormGroup;
  insumos: Insumos = new Insumos();
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
    this.db.collection("insumos")
      .doc(this.id).get().subscribe(response => {

        this.insumos.id = this.id;
        //this.downloadImage();
        this.insumos.nome = response.data().nome;
        this.insumos.estoque = response.data().estoque;
        this.insumos.descricao = response.data().descricao;
        this.insumos.preco = response.data().preco;
        this.insumos.imagem = response.data().imagem;
      })
  }
  loadInsumos() {
    this.db.collection("insumos").doc(this.id).get().subscribe(response => {
      if (response.exists == false) {
        this.nInsumos();
      } else {
        this.insumos;
      }
    })
  }

  nInsumos() {
    let json = {
      nome: "",
      estoque: "",
      descricao: "",
      preco: "",
    }
    this.db.collection('insumos').doc(this.id).set(json).then(() => { })
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
