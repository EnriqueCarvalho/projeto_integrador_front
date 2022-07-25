import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../model/usuario';
import { LoginService } from '../../service/login.service';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostrarMenu:boolean = false
  usuarioLogado:Usuario = new Usuario

  constructor( 
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {    
    if(this.loginService.isAutenticado()){
      this.usuarioLogado=this.loginService.getUsuarioLogado()
    } 
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )  
    
    this.loginService.usuarioLogadoEmitter.subscribe(
      usuarioLogado => this.usuarioLogado = usuarioLogado
    ) 

   
  }

  logout(){
    this.loginService.logout()
  }
   
  getUsuario(){
  this.router.navigate(['cliente/conta'])
  }

}
