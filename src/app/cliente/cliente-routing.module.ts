import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MinhaContaComponent } from '../shared/components/minha-conta/minha-conta.component';
import { ReservasComponent } from './reservas/reservas.component';
import { NovaReservaComponent } from './reservas/nova-reserva/nova-reserva.component';
import { EditarReservaComponent } from './reservas/editar-reserva/editar-reserva.component';

const routes: Routes = [
  {
    path:'reservas',
    component: ReservasComponent
  },
  {
    path:'conta',
    component: MinhaContaComponent
  },
  {
    path:'nova-reserva',
    component: NovaReservaComponent
  },
  {
    path:'editar-reserva/:reserva',
    component: EditarReservaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
