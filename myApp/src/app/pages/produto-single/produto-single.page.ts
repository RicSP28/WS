import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produtos } from 'src/model/produtos';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-produto-single',
  templateUrl: './produto-single.page.html',
  styleUrls: ['./produto-single.page.scss'],
})
export class ProdutoSinglePage implements OnInit {
  id: string;
  formGroup: FormGroup;
  produtos: Produtos = new Produtos();
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
    this.db.collection("produtos")
      .doc(this.id).get().subscribe(response => {

        this.produtos.id = this.id;
        this.downloadImage();
        this.produtos.nome = response.data().nome;
        this.produtos.estoque = response.data().estoque;
        this.produtos.descricao = response.data().descricao;
        this.produtos.preco = response.data().preco;
        this.produtos.categoria = response.data().categoria;
      })
  }

  loadProdutos() {
    this.db.collection("produtos").doc(this.id).get().subscribe(response => {
      if (response.exists == false) {
        this.nProdutos();
      } else {
        this.produtos;
      }
    })
  }

  nProdutos() {
    let json = {
      nome: "",
      estoque: "",
      descricao: "",
      preco: "",
      categoria: "",
    }
    this.db.collection('produtos').doc(this.id).set(json).then(() => { })
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
