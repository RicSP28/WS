import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router: Router,
    private menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
    this.menuCtrl.enable(false);
  }
  

  goLogin() {
    this.router.navigate(['/login']);
  }

  goNovoUsuario() {
    this.router.navigate(['/cadastro-usuario']);
  }

}
