import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Usuario } from '../model/usuario';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  

  constructor(private loginService: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const usuario_logado:Usuario = this.loginService.getUsuarioLogado();
   
    if(usuario_logado){
        
      const authRequest = req.clone(
        {setHeaders:{'X-usuario': 'id:' + usuario_logado.id }
       
      }
        
      );
      return next.handle(authRequest);
    }else {
      return next.handle(req);
    }
  }

  
}
