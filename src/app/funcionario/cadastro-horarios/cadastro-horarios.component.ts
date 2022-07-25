import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabAuxiliar } from 'src/app/shared/model/tabAuxiliar';
import { LoginService } from 'src/app/shared/service/login.service';
import { TabAuxiliarService } from 'src/app/shared/service/tab-auxiliar.service';

@Component({
  selector: 'app-cadastro-horarios',
  templateUrl: './cadastro-horarios.component.html',
  styleUrls: ['./cadastro-horarios.component.css']
})
export class CadastroHorariosComponent implements OnInit {

  horarios: TabAuxiliar []= []
  formulario: FormGroup = new FormGroup({});
  horario: TabAuxiliar = new TabAuxiliar()
  display_form = 'none'
  display_novo = 'block'

  horario_mask = [/[0-9]/, /\d/,':', /\d/, /\d/,]

  constructor(
    private tabAuxiliarService: TabAuxiliarService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      horario: [null, [Validators.required,Validators.minLength(4)]],     
     
    })
    this.getHorarios()
  }

  novoHorario(){
    this.display_form = 'block'
    this.display_novo = 'none'
  }

  getHorarios(){   
     this.tabAuxiliarService.getTabAuxiliar('1').subscribe(horarios => this.horarios = horarios)
  }

  removerHorario(id: number){
    let t: TabAuxiliar = new TabAuxiliar();
    t.id = id;   

    this.tabAuxiliarService.deletarTabAuxItem(t).subscribe(e=>{
      console.log(e)
      if (e == "sucess"){
        this.getHorarios()
      }else{
        alert("Erro ao excluir Espaço: "+e)  
      }      
        
    })     
    
  }

  cadastrar(){
    if (this.formulario.valid){
      this.horario.valorAlfa= this.formulario.get('horario')?.value  
      this.horario.codTab = 1
      this.horario.quadra.id =this.loginService.getUsuarioLogado().idQuadra    

      
      this.tabAuxiliarService.cadastrarTabAux(this.horario).subscribe(e=>{
        if (e != null){
          this.getHorarios()
          this.display_form = 'none'
          this.display_novo = 'block'
          //this.router.navigate(['funcionario/espacos'])
        }else{
          alert("Erro ao cadastrar Horário")  
        }
       
          
        })
    }
  }

  cancelar(){
    this.display_form = 'none'
    this.display_novo = 'block'
  }
  

}
