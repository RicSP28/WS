import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/model/perfil';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  formGroup : FormGroup;
  idUser : string;
  perfil : Perfil = new Perfil();
  imagem : any;

  constructor(private formBuild : FormBuilder,
    private toastCtrl : ToastController,
    private auth : AngularFireAuth,
    private db : AngularFirestore,
    public firestorage : AngularFireStorage,
    private alertController : AlertController,
    private loadingController : LoadingController,
    private router : Router) {

      this.formGroup = this.formBuild.group({
        nome: ['',Validators.required],
        sobrenome: ['',Validators.required],
        telefone: ['',Validators.required],
        email: ['',Validators.required]
      });

      this.auth.user.subscribe(resp =>{
        this.idUser = resp.uid;
        this.loadPerfil();
        this.downloadImage();
      });
     }

  ngOnInit() {
  }

  loadPerfil(){
    this.db.collection("perfil").doc(this.idUser).get().subscribe(response =>{
      if(response.exists==false){
        this.nPerfil();
      }else{
        this.perfil.setPerfil(response.data());
      }
    })
  }

  nPerfil(){
    let json = {
      nome: "",
      sobrenome: "",
      telefone: "",
      email: ""
    }
    this.db.collection('perfil').doc(this.idUser).set(json).then(() =>{})
  }

  atualizar(){
    this.db.collection('perfil').doc(this.idUser).set(this.formGroup.value).then(() =>{this.presentToast();
    this.router.navigate(['perfil']);
  }).catch(()=>{
    console.log('Erro ao atualizar');
  })

  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Atualizado com sucesso',
      duration: 2000
    });
    toast.present();
  }

  
  enviaArquivo(event){
    this.imagem = event.srcElement.files[0];
    this.uploadStorage();
  }

  async uploadStorage(){

    let loading = await this.loadingController.create({
      message: 'Carregando!',
      duration: 2000
    });

    await loading.present();

    let urlImage = this.firestorage.storage.ref().child(`perfil/${this.idUser}.jpg`);
    urlImage.put(this.imagem).then(resp =>{
      this.downloadImage();
    });
  }

downloadImage(){
  let ref = this.firestorage.storage.ref().child(`perfil/${this.idUser}.jpg`);
  ref.getDownloadURL().then(url =>{
    this.imagem = url;
  });
}
}
