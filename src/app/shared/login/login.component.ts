import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario()
  

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({

      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  
    })
  }

  fazerLogin(){
    if (this.formulario.valid){   
      

      this.usuario.login= this.formulario.get('login')?.value
      this.usuario.senha= this.formulario.get('senha')?.value

      this.loginService.login(this.usuario).subscribe(u=>{
        if (u != null){
          this.loginService.setUsuarioLogado(u)     
        }else{
          alert("Usuário e/ou senha incorretos")  
        }
      })
    }

   
  }

 
}
