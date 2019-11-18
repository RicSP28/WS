import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-de-fornecedores',
  templateUrl: './cadastro-de-fornecedores.page.html',
  styleUrls: ['./cadastro-de-fornecedores.page.scss'],
})
export class CadastroDeFornecedoresPage implements OnInit {

  
  formGroup : FormGroup; 

  constructor (private formB : FormBuilder, // Inicializar o formulário (obrigatório para formGroup)
    private db: AngularFirestore, // Inicia o banco de dados do firebase (Firestore)
    private toastCtrl : ToastController) { // Exibir Mensagem

    // Inicializa o Formulário, obrigatório no construtor
    this.formGroup = this.formB.group({
      nomedaempresa : ['',Validators.required],
      endereco : ['',Validators.required],
      telefonedecontato : ['',Validators.required],
    });
  }

  ngOnInit() {
  }

  cadastrar(){
    this.db.collection('fornecedores') // Seleciono a coleção do firebase
      .add(this.formGroup.value).then(() =>{ // .add realiza o cadastro, os dados do formGroup
        this.presentToast();// Dados cadastrados com sucesso
      }).catch(()=>{ 
        console.log("Erro ao cadastrar!") // Erro
      });
      // then -> Sucesso
      // catch -> Erro
  }

  // template para toastController
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Cadastrado com sucesso',
      duration: 2000
    });
    toast.present();
  }

}


