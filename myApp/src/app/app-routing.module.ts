import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastro-de-fornecedores', loadChildren: './cadastro-de-fornecedores/cadastro-de-fornecedores.module#CadastroDeFornecedoresPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'cadastro-usuario', loadChildren: './pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'recuperar-senha', loadChildren: './pages/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  { path: 'home-app', loadChildren: './pages/home-app/home-app.module#HomeAppPageModule' },
  { path: 'logoff', loadChildren: './pages/logoff/logoff.module#LogoffPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'location', loadChildren: './pages/location/location.module#LocationPageModule' },
  { path: 'produtos', loadChildren: './pages/produtos/produtos.module#ProdutosPageModule' },
  { path: 'produto-single', loadChildren: './pages/produto-single/produto-single.module#ProdutoSinglePageModule' },
  { path: 'contato', loadChildren: './pages/contato/contato.module#ContatoPageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  { path: 'feedback-cadastro', loadChildren: './pages/feedback-cadastro/feedback-cadastro.module#FeedbackCadastroPageModule' },
  { path: 'feedback-detalhes', loadChildren: './pages/feedback-detalhes/feedback-detalhes.module#FeedbackDetalhesPageModule' },
  { path: 'sobre', loadChildren: './pages/sobre/sobre.module#SobrePageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'privacidade', loadChildren: './pages/privacidade/privacidade.module#PrivacidadePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

