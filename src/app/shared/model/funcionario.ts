import { Quadra } from "./quadra";
import { Usuario } from "./usuario";

export class Funcionario{
    id?: number ;
    matricula:string = '';
    perm?:string =''
    usuario: Usuario = new Usuario()
    quadra: Quadra = new Quadra()

}