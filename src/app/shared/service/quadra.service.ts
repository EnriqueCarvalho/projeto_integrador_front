import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioGuard } from '../guards/usuario.guard';
import { Quadra } from '../model/quadra';
import { Usuario } from '../model/usuario';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class QuadraService {

  
  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  getQuadra():  Observable<Quadra>{
    let id  = this.loginService.getUsuarioLogado().id;
     
    const params = new HttpParams()
    .set('idUsuario', <string>id?.toString());
    
    return this.http.get<Quadra>(this.API_URL+'visualizar-quadra',{params }); 

  }


  alterarQuadra(quadra: Quadra){
    console.log("Alterando quadra")
    return this.http.put(this.API_URL+'salvar-quadra', quadra, {responseType : 'text'});     
  }

}
