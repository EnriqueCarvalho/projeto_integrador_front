import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/shared/model/reserva';
import { ReservaService } from 'src/app/shared/service/reserva.service';

@Component({
  selector: 'app-reservas-quadra',
  templateUrl: './reservas-quadra.component.html',
  styleUrls: ['./reservas-quadra.component.css']
})
export class ReservasQuadraComponent implements OnInit {

  reservas: Reserva[] = []

  constructor(
    private reservaService: ReservaService
  ) { }

  ngOnInit(): void {

    this.reservaService.getReservasByQuadra().subscribe(reservas => this.reservas = reservas)
  }

  editar(reserva: Reserva){

  }

  novoEspaco(){

  }

}
