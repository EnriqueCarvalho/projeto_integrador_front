import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../model/reserva';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
  
  ) { }


  getReservasByUsuario(): Observable<Reserva[]>{
    return this.httpClient.get<Reserva[]>(this.API_URL+'visualizar-reservas')
  }


  getReservasByQuadra(): Observable<Reserva[]>{
    const params = new HttpParams()
    .set('idQuadra', <string>this.loginService.getUsuarioLogado().idQuadra?.toString()) 
    
    return this.httpClient.get<Reserva[]>(this.API_URL+'visualizar-reservas-quadra',{params})
  }

}
