import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Espaco } from '../model/espaco';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EspacoService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) { }


  getEspacosByQuadra(idQuadra: string): Observable<Espaco[]>{
  
    const params = new HttpParams()
    .set('idQuadra',idQuadra );

    return this.httpClient.get<Espaco[]>(this.API_URL+'visualizar-espacos',{params})
    .pipe(
      tap(espacos => console.log(espacos))
    )
    
  }

  cadastrarEspaco(espaco:Espaco): Observable<Espaco>{  
    const params = new HttpParams()
    .set('idQuadra', <string>this.loginService.getUsuarioLogado().idQuadra?.toString());
    return this.httpClient.post<Espaco>(this.API_URL+'cadastrar-espaco', espaco);      
  }


  getEspacoById(idEspaco: string|null): Observable<Espaco>{
    const params = new HttpParams()
    .set('idEspaco', <string>idEspaco);
    return this.httpClient.get<Espaco>(this.API_URL+'visualizar-espaco',{params}); 
  }

  excluirEspaco(espaco: Espaco): Observable<String>{
    const params = new HttpParams()
    .set('idEspaco', <string>espaco.id?.toString());
    return this.httpClient.delete(this.API_URL+'excluir-espaco',{params,responseType : 'text'},); 
  }
}
