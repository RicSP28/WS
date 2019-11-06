import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController, Events, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;
  

  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    public events: Events, ) {
    this.menuCtrl.swipeEnable(false);
  }

  ngOnInit() { }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.email, this.senha).then(() => {
        localStorage.setItem("id", this.afAuth.auth.currentUser.uid);
        this.menuCtrl.swipeEnable(true);
        this.router.navigate(['/home']);

      }).catch(err => {
        // Login incorreto
        this.presentToast();
      })
  }


  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Login inválido',
      duration: 2000
    });
    toast.present();
  }

  goNovoUsuario() {
    this.router.navigate(['/cadastro-usuario']);
  }

  goNovaSenha() {
    this.router.navigate(['/recuperar-senha']);

  }
}
