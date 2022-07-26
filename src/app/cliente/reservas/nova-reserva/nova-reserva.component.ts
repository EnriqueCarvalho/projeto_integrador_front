import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Espaco } from 'src/app/shared/model/espaco';
import { Quadra } from 'src/app/shared/model/quadra';
import { TabAuxiliar } from 'src/app/shared/model/tabAuxiliar';
import { EspacoService } from 'src/app/shared/service/espaco.service';
import { QuadraService } from 'src/app/shared/service/quadra.service';
import { TabAuxiliarService } from 'src/app/shared/service/tab-auxiliar.service';

@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.css']
})
export class NovaReservaComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  
  quadras: Quadra[] = []
  espacos: Espaco[] = []
  horarios: TabAuxiliar [] = []

  quadraSelect: Quadra = new Quadra()
  


  constructor(
    private router: Router,
    private quadraService: QuadraService,
    private formBuilder: FormBuilder,
    private tabAuxService: TabAuxiliarService,
    private espacoService: EspacoService
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      quadra: [null, [Validators.required, Validators.maxLength(35)]],
      ambiente: [null, [Validators.required, Validators.maxLength(35)]],
      data: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      horario: [null, [Validators.required]],
    })

    this.quadraService.getQuadras().subscribe(quadras => this.quadras = quadras)
  }

  cadastrar(){

  }

  cancelar(){
    this.router.navigate(['cliente/reservas'])
  }


  onSelect(){
    let id = this.formulario.get('quadra')?.value
    this.quadraSelect = this.quadras.
    filter((q)=>q.id == id)[0]

    this.espacoService.getEspacosByQuadra(<string>this.quadraSelect.id?.toString()).subscribe(
      e => this.espacos = e
    )
  }


  onSelectData(){

  }

  

}
