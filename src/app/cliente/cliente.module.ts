import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClienteRoutingModule } from './cliente-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservasComponent } from './reservas/reservas.component';
import { MinhaContaComponent } from '../shared/components/minha-conta/minha-conta.component';
import { TextMaskModule } from 'angular2-text-mask';




@NgModule({
  declarations: [
    CadastrarComponent,
    ReservasComponent,
    MinhaContaComponent
  ],
  imports: [
   
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  
  ]
})
export class ClienteModule { }
