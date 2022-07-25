import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Espaco } from 'src/app/shared/model/espaco';
import { EspacoService } from 'src/app/shared/service/espaco.service';


@Component({
  selector: 'app-cadastro-espacos',
  templateUrl: './cadastro-espacos.component.html',
  styleUrls: ['./cadastro-espacos.component.css']
})
export class CadastroEspacosComponent implements OnInit {

  espacos : Espaco[] = []


  
  constructor(
    private espacoService: EspacoService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.espacoService.getEspacosByQuadra().subscribe(espacos => this.espacos = espacos)
  }

  novoEspaco(){
    this.router.navigate(['funcionario/novo-espaco'])
  }

  editar(espaco:Espaco){
    this.router.navigate(["funcionario/editar-espaco",espaco.id])

  }

}
