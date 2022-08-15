import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ReservasQuadraComponent } from './reservas-quadra/reservas-quadra.component';
import { CadastroQuadraComponent } from './cadastro-quadra/cadastro-quadra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroEspacosComponent } from './cadastro-espacos/cadastro-espacos.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NovoEspacoComponent } from './cadastro-espacos/novo-espaco/novo-espaco.component';
import { EditarEspacoComponent } from './cadastro-espacos/editar-espaco/editar-espaco.component';
import { TextMaskModule } from 'angular2-text-mask';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { NovoFuncionarioComponent } from './cadastro-funcionarios/novo-funcionario/novo-funcionario.component';
import { CadastroHorariosComponent } from './cadastro-horarios/cadastro-horarios.component';
import { CpfPipe } from '../shared/pipe/cpf.pipe';


@NgModule({
  declarations: [
    ReservasQuadraComponent,
    CadastroQuadraComponent,
    CadastroEspacosComponent,
    NovoEspacoComponent,
    EditarEspacoComponent,
    CadastroFuncionariosComponent,
    NovoFuncionarioComponent,
    CadastroHorariosComponent,
    CpfPipe
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    TextMaskModule
    
    
    
  ]
})
export class FuncionarioModule { }
