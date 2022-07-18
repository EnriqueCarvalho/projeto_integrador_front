import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ReservasQuadraComponent } from './reservas-quadra/reservas-quadra.component';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroEspacosComponent } from './cadastro-espacos/cadastro-espacos.component';


@NgModule({
  declarations: [
    ReservasQuadraComponent,
    CadastroQuadraComponent,
    CadastroEspacosComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FuncionarioModule { }
