import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.page.html',
  styleUrls: ['./home-app.page.scss'],
})
export class HomeAppPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goPage(){
    this.router.navigate(['produtos']);
  }

}
