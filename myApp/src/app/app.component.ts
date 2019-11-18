import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home-app',
      icon: 'home'
    },
    {
      title: 'Produtos',
      url: '/produtos',
      icon: 'nutrition'
    },
    {
      title: 'Carrinho',
      url: '/cart',
      icon: 'cart'
    },
    {
      title: 'Feedback',
      url: '/feedback',
      icon: 'bookmarks'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'paper-plane'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'restaurant'
    },
    {
      title: 'Política de privacidade',
      url: '/privacidade',
      icon: 'help-circle-outline'
    },
    {
      title: 'Cadastrar Feedback',
      url: '/feedback-cadastro',
      icon: 'list'
    },
    {
      title: 'Localização',
      url: '/location',
      icon: 'pin'
    },
    {
      title: 'Logoff',
      url: '/logoff',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
