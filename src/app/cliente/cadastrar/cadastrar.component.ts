import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario();

  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService 
  ) { }

  ngOnInit(): void {
    this.loginService.mostrarMenuEmitter.emit(false)
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(5)]],
      cpf: [null, [Validators.required, Validators.maxLength(14)]],
      email: [null, [Validators.required, Validators.email]],
      fone: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(5)]],
      login: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(4)]],
      senha: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(4)]],
     
    })
  }

  cancelar(){
    this.router.navigate(['/'])
    this.loginService.mostrarMenuEmitter.emit(false)
    
  }

  cadastrar(){
    if (this.formulario.valid){
      this.usuario.nome= this.formulario.get('nome')?.value
      this.usuario.cpf= this.formulario.get('cpf')?.value
      this.usuario.email= this.formulario.get('email')?.value
      this.usuario.fone= this.formulario.get('fone')?.value
      this.usuario.login= this.formulario.get('login')?.value
      this.usuario.senha= this.formulario.get('senha')?.value

      
      this.loginService.cadastrar(this.usuario).subscribe(u=>{
        if (u != null){
          alert("Usuario cadastrado com sucessso")
          this.loginService.mostrarMenuEmitter.emit
          this.router.navigate(['/'])
        }else{
          alert("Erro ao cadastrar Usuário")  
        }
       
          
        })
    }
    
  }


}
