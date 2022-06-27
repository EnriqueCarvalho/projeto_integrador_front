import { HttpClient } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticado: boolean = false
  private readonly API_URL = 'http://localhost:8080/';

  routP : any = 'cliente/';

  mostrarMenuEmitter = new EventEmitter<boolean>()
  usuarioLogadoEmitter = new EventEmitter<Usuario>()

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  setUsuarioLogado(usuario: Usuario){
    
    sessionStorage.setItem('usuario-logado', JSON.stringify(usuario));
    this.usuarioAutenticado = true;
    this.mostrarMenuEmitter.emit(true)
    this.usuarioLogadoEmitter.emit(usuario)
    console.log(usuario.tipo)
    if(usuario.tipo != 'C'){
      this.routP = 'funcionario'
    }
    this.router.navigate([this.routP+"/reservas"])
  }

  getUsuarioLogado(): Usuario{
    return JSON.parse(<string>sessionStorage.getItem("usuario-logado"))
  }

  getUsuario():  Observable<Usuario>{
    return this.http.get<Usuario>(this.API_URL+'usuario'); 
  }


  isAutenticado():boolean{
    let u: Usuario = JSON.parse(<string>sessionStorage.getItem("usuario-logado"))
    if(u){
      this.mostrarMenuEmitter.emit(true)
      return true
    }
    return false;
  }

  logout(){
    
      sessionStorage.removeItem("usuario-logado");
      this.mostrarMenuEmitter.emit(false)
      this.router.navigate(['/']);
    
  }


  login(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API_URL+'login', usuario); 
  }

  cadastrar(usuario: Usuario):  Observable<Usuario>{
     return this.http.post<Usuario>(this.API_URL+'cadastrar', usuario);     
  }

  
  alterar(usuario: Usuario):  Observable<Usuario>{
    return this.http.post<Usuario>(this.API_URL+'cadastrar', usuario);     
 }

 desativarConta(usuario: Usuario){
  return this.http.put<Usuario>(this.API_URL+'desativarconta', usuario);  
 }
}
