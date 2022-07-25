import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { Funcionario } from '../model/funcionario';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) { }

  getFuncionariosByQuadra(): Observable<Funcionario[]>{
    const params = new HttpParams()
    .set('idQuadra', <string>this.loginService.getUsuarioLogado().idQuadra?.toString());

    return this.httpClient.get<Funcionario[]>(this.API_URL+'visualizar-funcionarios',{params})
    
  }



  cadastrarFuncionario(funcionario:Funcionario): Observable<Funcionario>{  
    const params = new HttpParams()
    .set('idQuadra', <string>this.loginService.getUsuarioLogado().idQuadra?.toString())
    .set('cpf', <string>funcionario.usuario.cpf);
    return this.httpClient.post<Funcionario>(this.API_URL+'cadastrar-funcionario', funcionario);      
  }
}
