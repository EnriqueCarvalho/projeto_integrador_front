import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/shared/model/funcionario';
import { FuncionarioService } from 'src/app/shared/service/funcionario.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  funcionario: Funcionario = new Funcionario()

  cpf = [ /[0-9]/, /\d/, /\d/, '.',/[1-9]/, /\d/, /\d/,'.',/[1-9]/, /\d/, /\d/,'-' , /\d/, /\d/,]

  constructor(
    private router:Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      matricula: [null, [Validators.required,Validators.minLength(5)]],
      cpf: [null, [Validators.required]],
     
     
    })
  }

  cadastrar(){
    if (this.formulario.valid){
      this.funcionario.matricula= this.formulario.get('matricula')?.value
      this.funcionario.usuario.cpf= this.formulario.get('cpf')?.value
      this.funcionario.quadra.id= this.loginService.getUsuarioLogado().idQuadra  

      
      this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe(e=>{
        if (e != null){
          alert("Funcionário cadastrado com sucessso")
          this.router.navigate(['funcionario/funcionarios'])
        }else{
          alert("Erro ao cadastrar Funcionário")  
        }
       
          
        })
    }
  }
  cancelar(){
    this.router.navigate(['funcionario/funcionarios']) 
  }

}
