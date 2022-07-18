import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';
import { UsuarioGuard } from './shared/guards/usuario.guard';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path:'cadastrar',
    pathMatch:'full',
    component: CadastrarComponent
  }, {
    path: 'cliente',
    canActivate :[UsuarioGuard],
    loadChildren: () => import('./cliente/cliente.module').then (m=>m.ClienteModule)
  },
  {
    path: 'funcionario',
    canActivate :[UsuarioGuard],
    loadChildren: () => import('./funcionario/funcionario.module').then (m=>m.FuncionarioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
