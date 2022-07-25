import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService implements ErrorHandler {

  constructor() { }
 

  handleError(error: HttpErrorResponse | any): void {

    if(error instanceof HttpErrorResponse){

   
       console.log(error.status);

  
      switch (error.status){
        case 400:
          alert(error.error.message)
          break;
        case 401:
          alert('Sessão expirada')         
          
          break;
        case 403:
          alert('Acesso negado')
          break;
          case 0:
            alert('Não foi possível conectar ao servidor...')
          break;
          case 409:
            alert("Não foi possível realizar a operação")
          break;
      }


    }
  }
}
