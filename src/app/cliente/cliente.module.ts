import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClienteRoutingModule } from './cliente-routing.module';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservasComponent } from './reservas/reservas.component';
import { MinhaContaComponent } from '../shared/components/minha-conta/minha-conta.component';
import { TextMaskModule } from 'angular2-text-mask';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NovaReservaComponent } from './reservas/nova-reserva/nova-reserva.component';
import { EditarReservaComponent } from './reservas/editar-reserva/editar-reserva.component';




@NgModule({
  declarations: [
    CadastrarComponent,
    ReservasComponent,
    MinhaContaComponent,
    NovaReservaComponent,
    EditarReservaComponent
  ],
  imports: [
   
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    AccordionModule.forRoot(),
  
  ]
})
export class ClienteModule { }
