import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroDeFornecedoresPage } from './cadastro-de-fornecedores.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDeFornecedoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroDeFornecedoresPage]
})
export class CadastroDeFornecedoresPageModule {}
