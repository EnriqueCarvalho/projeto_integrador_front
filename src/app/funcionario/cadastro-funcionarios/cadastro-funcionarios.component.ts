import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/shared/model/funcionario';
import { FuncionarioService } from 'src/app/shared/service/funcionario.service';

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.css']
})
export class CadastroFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = []

  constructor(
    private funcionarioService: FuncionarioService,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.funcionarioService.getFuncionariosByQuadra().subscribe(funcionarios => this.funcionarios = funcionarios)
  }

  editar(funcionario: Funcionario){

  }

  novoFuncionario(){
    this.router.navigate(['funcionario/novo-funcionario'])
  }

}
