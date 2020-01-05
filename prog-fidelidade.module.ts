import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProgFidelidadePage } from './prog-fidelidade.page';

const routes: Routes = [
  {
    path: '',
    component: ProgFidelidadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgFidelidadePage]
})
export class ProgFidelidadePageModule {}
