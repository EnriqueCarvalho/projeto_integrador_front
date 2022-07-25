import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TabAuxiliar } from '../model/tabAuxiliar';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TabAuxiliarService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
  
  ) { }

  getTabAuxiliar(codTab:String): Observable<TabAuxiliar[]>{
  
    const params = new HttpParams()
    .set('idQuadra', <string>this.loginService.getUsuarioLogado().idQuadra?.toString())
    .set('codTab',<string>codTab)  

    return this.httpClient.get<TabAuxiliar[]>(this.API_URL+'visualizar-tabaux',{params})
   
    
  }

  cadastrarTabAux(tabAuxiliar: TabAuxiliar): Observable<TabAuxiliar>{ 
    return this.httpClient.post<TabAuxiliar>(this.API_URL+'cadastrar-tabaux', tabAuxiliar);  
  }



  deletarTabAuxItem(tabAuxiliar: TabAuxiliar): Observable<string>{ 
    const params = new HttpParams()
    .set('idTabAux', <string>tabAuxiliar.id.toString());
    console.log(tabAuxiliar.id)
    return this.httpClient.delete(this.API_URL+'deletar-tabaux',{params,responseType : 'text'},);  
  }
}
