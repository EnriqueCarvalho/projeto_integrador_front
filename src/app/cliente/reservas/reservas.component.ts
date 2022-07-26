import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/shared/model/reserva';
import { ReservaService } from 'src/app/shared/service/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservas: Reserva[] = []

  constructor(
    private reservaService: ReservaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reservaService.getReservasByUsuario().subscribe(reservas => this.reservas = reservas)
  }

  editar(reserva: Reserva){

  }

  novaReserva(){
    this.router.navigate(['cliente/nova-reserva'])
  }


}
