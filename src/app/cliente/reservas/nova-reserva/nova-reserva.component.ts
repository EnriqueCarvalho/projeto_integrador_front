import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Espaco } from 'src/app/shared/model/espaco';
import { Quadra } from 'src/app/shared/model/quadra';
import { Reserva } from 'src/app/shared/model/reserva';
import { TabAuxiliar } from 'src/app/shared/model/tabAuxiliar';
import { EspacoService } from 'src/app/shared/service/espaco.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { QuadraService } from 'src/app/shared/service/quadra.service';
import { ReservaService } from 'src/app/shared/service/reserva.service';
import { TabAuxiliarService } from 'src/app/shared/service/tab-auxiliar.service';

@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.css']
})
export class NovaReservaComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});

  reserva: Reserva = new Reserva()
  
  quadras: Quadra[] = []
  espacos: Espaco[] = []
  horarios: TabAuxiliar [] = []

  quadraSelect: Quadra = new Quadra()
  


  constructor(
    private router: Router,
    private quadraService: QuadraService,
    private formBuilder: FormBuilder,
    private tabAuxService: TabAuxiliarService,
    private espacoService: EspacoService,
    private reservaService: ReservaService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      quadra: [null, [Validators.required, Validators.maxLength(35)]],
      espaco: [null, [Validators.required, Validators.maxLength(35)]],
      data: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      hora: [null, [Validators.required]],
    })

    this.quadraService.getQuadras().subscribe(quadras => this.quadras = quadras)
  }

  cadastrar(){
    if (this.formulario.valid){
      this.reserva.espaco.id= this.formulario.get('espaco')?.value
      this.reserva.data= this.formulario.get('data')?.value
      this.reserva.hora= this.formulario.get('hora')?.value
      this.reserva.usuario.id = this.loginService.getUsuarioLogado().id
      
    

      
      this.reservaService.cadastrarReserva(this.reserva).subscribe(e=>{
        if (e != null){
          alert("Reserva cadastrada com sucessso")
          this.router.navigate(['cliente/reservas'])
        }else{
          alert("Erro ao cadastrar reserva")  
        }
       
          
        })
    }
    
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
    
    let idEspaco = this.formulario.get('espaco')?.value
    let data = this.formulario.get('data')?.value
    

    this.tabAuxService.getHorariosDisp('1',idEspaco,data).subscribe(
      h => this.horarios = h
    )
  }

  

}
