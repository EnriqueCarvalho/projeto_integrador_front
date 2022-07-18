import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEspacosComponent } from './cadastro-espacos/cadastro-espacos.component';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';
import { ReservasQuadraComponent } from './reservas-quadra/reservas-quadra.component';

const routes: Routes = [
  {
    path:'reservas',
    component: ReservasQuadraComponent
  },
  {
    path:'quadra',
    component: CadastroQuadraComponent
  },
  {
    path:'espacos',
    component: CadastroEspacosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
