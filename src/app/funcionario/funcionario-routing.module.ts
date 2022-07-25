import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEspacosComponent } from './cadastro-espacos/cadastro-espacos.component';
import { EditarEspacoComponent } from './cadastro-espacos/editar-espaco/editar-espaco.component';
import { NovoEspacoComponent } from './cadastro-espacos/novo-espaco/novo-espaco.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { NovoFuncionarioComponent } from './cadastro-funcionarios/novo-funcionario/novo-funcionario.component';
import { CadastroHorariosComponent } from './cadastro-horarios/cadastro-horarios.component';
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
  },
  {
    path:'novo-espaco',
    component: NovoEspacoComponent
  },
  {
    path:'editar-espaco/:espaco',
    component: EditarEspacoComponent
  },
  {
    path:'funcionarios',
    component: CadastroFuncionariosComponent
  },
  {
    path:'novo-funcionario',
    component: NovoFuncionarioComponent
  },
  {
    path:'horarios',
    component: CadastroHorariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
