import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mostrarMenu:boolean = false

  constructor( 
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
    
  }

  logout(){
    this.loginService.logout()
  }
   
  getUsuario(){
  this.router.navigate(['cliente/conta'])
  }

}
