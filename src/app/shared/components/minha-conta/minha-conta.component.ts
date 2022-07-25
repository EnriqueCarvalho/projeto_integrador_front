import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/model/usuario';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  usuario:Usuario = new Usuario
  formulario: FormGroup = new FormGroup({});
  display_c = 'none'
  display_a = 'block'


  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService 
  ) { }

  ngOnInit(): void {

    this.loginService.getUsuario().subscribe(u=>{
      if (u != null){
        this.usuario = u 
        console.log(u)
      }else{
        alert("Não achou")  
      }
    })

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(5)]],
      cpf: [null, [Validators.required, Validators.maxLength(14)]],
      email: [null, [Validators.required, Validators.email]],
      fone: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(5)]],
      login: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(4)]],
      senha: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(4)]],
     
    })

    this.disableForm()
  }

  alterar(){
    this.formulario.get('nome')?.enable({ onlySelf: true });
    this.formulario.get('cpf')?.enable({ onlySelf: true });
    this.formulario.get('email')?.enable({ onlySelf: true });
    this.formulario.get('fone')?.enable({ onlySelf: true });
    this.formulario.get('login')?.enable({ onlySelf: true });
    this.formulario.get('senha')?.enable({ onlySelf: true });
      this.display_c = 'block'
      this.display_a = 'none'
      
      console.log("alterar");
  }

  cancelar(){
    this.disableForm()
    this.display_c = 'none'
    this.display_a = 'block'
    console.log("cancelar");  
  }

  disableForm(){
    this.formulario.get('nome')?.disable({ onlySelf: true });
    this.formulario.get('cpf')?.disable({ onlySelf: true });
    this.formulario.get('email')?.disable({ onlySelf: true });
    this.formulario.get('fone')?.disable({ onlySelf: true });
    this.formulario.get('login')?.disable({ onlySelf: true });
    this.formulario.get('senha')?.disable({ onlySelf: true });
  
  }

  salvar(){
    
    if (this.formulario.valid){
      u:Usuario
      
      this.usuario.id = this.loginService.getUsuarioLogado().id
      this.usuario.nome= this.formulario.get('nome')?.value
      this.usuario.cpf= this.formulario.get('cpf')?.value
      this.usuario.email= this.formulario.get('email')?.value
      this.usuario.fone= this.formulario.get('fone')?.value
      this.usuario.login= this.formulario.get('login')?.value
      this.usuario.senha= this.formulario.get('senha')?.value
      
    
      
      this.loginService.alterar(this.usuario).subscribe(u=>{
        if (u != null){
          alert("Usuario cadastrado com sucessso")
          this.loginService.mostrarMenuEmitter.emit
         this.loginService.homebyLogin()
        }else{
          alert("Erro ao cadastrar Usuário")  
        }
       
          
        })
    }
  }

  desativarConta(){
    this.usuario.id = this.loginService.getUsuarioLogado().id

    this.loginService.desativarConta(this.usuario).subscribe(u=>{
    
        this.loginService.logout()
        this.loginService.mostrarMenuEmitter.emit(false)
        this.router.navigate(['/'])   
        alert("Conta desativada com sucessso")
     
        
      })
 
    
    
  }

}
