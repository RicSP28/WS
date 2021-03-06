import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.page.html',
  styleUrls: ['./logoff.page.scss'],
})
export class LogoffPage implements OnInit {
  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private menuCtrl: MenuController,) { 
      this.menuCtrl.swipeEnable(false);
      this.menuCtrl.enable(false);
    }

  ngOnInit() {
    this.afAuth.auth.signOut().then(()=>{
      localStorage.removeItem("id");
      this.router.navigate(['/home']);
    }).catch(()=>{
      this.router.navigate(['/home']);
    })
  }
}
