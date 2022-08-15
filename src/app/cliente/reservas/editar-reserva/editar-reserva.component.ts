import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html',
  styleUrls: ['./editar-reserva.component.css']
})
export class EditarReservaComponent implements OnInit {

  display_c = 'none'
  display_a = 'block'
  horarioAntigo:string = ''

  modalRef?: BsModalRef;
  @ViewChild('templateConfirm') templateConfirm:any

  formulario: FormGroup = new FormGroup({});
  formularioModal: FormGroup = new FormGroup({});

  reserva: Reserva = new Reserva()
  
  quadras: Quadra[] = []
  espacos: Espaco[] = []
  horarios: TabAuxiliar [] = []

  quadraSelect: Quadra = new Quadra()
  


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quadraService: QuadraService,
    private formBuilder: FormBuilder,
    private tabAuxService: TabAuxiliarService,
    private espacoService: EspacoService,
    private reservaService: ReservaService,
    private loginService: LoginService,
    private modalService: BsModalService,
  ) {}

  ngOnInit(): void {   

    this.reservaService.getReservaById(this.route.snapshot.paramMap.get('reserva')).subscribe(    
      reserva => this.montarForm(reserva)
    )
    

    this.formulario = this.formBuilder.group({
      quadra: [null, [Validators.required, Validators.maxLength(35)]],
      espaco: [null, [Validators.required, Validators.maxLength(35)]],
      data: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      hora: [null, [Validators.required]],
    }) 

    
    this.formularioModal = this.formBuilder.group({
      motivo: [null, [Validators.required,Validators.minLength(5) ,Validators.maxLength(100)]],
      
    }) 
    this.disableForm() 
    
    
    
    

    this.quadraService.getQuadras().subscribe(
      quadras => this.quadras = quadras
      
      )
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




  onSelect(){    
    let id = this.reserva.espaco.quadra.id  
    
    this.espacoService.getEspacosByQuadra(<string>id?.toString()).subscribe(
      e => this.montarEspaco(e)
    )
  }


  onSelectData(){    
    let idEspaco = this.formulario.get('espaco')?.value

    let data = this.formulario.get('data')?.value
    this.tabAuxService.getHorariosDisp('1',idEspaco,data).subscribe(
      h => this.horarios = h
    )
  }

  alterar(){
   
    this.formulario.get('id')?.enable({ onlySelf: true });
    this.formulario.get('quadra')?.enable({ onlySelf: true });
    this.formulario.get('espaco')?.enable({ onlySelf: true });
    this.formulario.get('data')?.enable({ onlySelf: true });
    this.formulario.get('hora')?.enable({ onlySelf: true });
      this.display_c = 'block'
      this.display_a = 'none'  
    
  } 

  cancelar(){
    this.disableForm()
    this.display_c = 'none'
    this.display_a = 'block'
    
  }

  disableForm(){
    this.formulario.get('id')?.disable({ onlySelf: true });
    this.formulario.get('quadra')?.disable({ onlySelf: true });
    this.formulario.get('espaco')?.disable({ onlySelf: true });
    this.formulario.get('data')?.disable({ onlySelf: true });
    this.formulario.get('hora')?.disable({ onlySelf: true });
  }

  montarForm(reserva: Reserva){
    this.horarioAntigo = reserva.hora
    this.reserva = reserva  
    this.formulario.reset()     
    this.formulario.get('data')?.patchValue(this.reserva.data)   
    this.formulario.controls['quadra']?.patchValue(this.reserva.espaco.quadra.id)   
    
    
    this.onSelect() 
    
    
  }

  montarEspaco(espaco: Espaco[]){
    this.espacos = espaco
    
    this.formulario.controls['espaco'].patchValue(this.reserva.espaco.id)
    
    this.formulario.get('hora')?.patchValue(this.reserva.hora)
    
   
    this.horarioAntigo = this.reserva.hora
    this.onSelectData()
  }


  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, {
      ariaDescribedby: 'my-modal-description',
      ariaLabelledBy: 'my-modal-title'
    });  
  }
  excluirReserva(){

    if(this.formularioModal.valid){

  
    this.reserva.motivoCancel =  this.formularioModal.get('motivo')?.value
    this.reserva.dataCancel = new Date().toString()
    this.reservaService.excluirReserva(this.reserva).subscribe(r=>{
      console.log(r)
      if (r != null){
        this.modalRef?.hide()
        alert("Reserva excluido com sucessso")
        this.router.navigate(['cliente/reservas'])
      }else{
        alert("Erro ao excluir reserva: "+r)  
      }      
        
      })   
    }
    
    }

    voltar(){
      this.router.navigate(['cliente/reservas'])
    }

  

}
