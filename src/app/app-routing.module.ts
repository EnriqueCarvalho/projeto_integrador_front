import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';
import { LoginComponent } from './shared/login/login.component';


const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: LoginComponent
  }, {
    path:'cadastrar',
    component: CadastrarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
