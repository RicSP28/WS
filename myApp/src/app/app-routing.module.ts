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
  
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'produtos', loadChildren: './pages/produtos/produtos.module#ProdutosPageModule' },
  { path: 'cadastro-usuario', loadChildren: './pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
  { path: 'recuperar-senha', loadChildren: './pages/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  { path: 'insumos', loadChildren: './pages/insumos/insumos.module#InsumosPageModule' },
  { path: 'utensilios', loadChildren: './pages/utensilios/utensilios.module#UtensiliosPageModule' },
  { path: 'home-app', loadChildren: './pages/home-app/home-app.module#HomeAppPageModule' },  { path: 'logoff', loadChildren: './pages/logoff/logoff.module#LogoffPageModule' },
  { path: 'insumo-single', loadChildren: './pages/insumo-single/insumo-single.module#InsumoSinglePageModule' },
  { path: 'utensilio-single', loadChildren: './pages/utensilio-single/utensilio-single.module#UtensilioSinglePageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
