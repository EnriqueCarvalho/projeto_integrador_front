import { Espaco } from "./espaco";
import { Usuario } from "./usuario";

export class Reserva{    
    id?: number =undefined;
    data: string = ''
    hora: string = ''
    dataCancel?: string 
    motivoCancel?:string 
    usuario: Usuario = new Usuario()
    espaco: Espaco = new Espaco()
}