import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Espaco } from 'src/app/shared/model/espaco';
import { LoginService } from 'src/app/shared/service/login.service';
import { EspacoService } from 'src/app/shared/service/espaco.service';

@Component({
  selector: 'app-novo-espaco',
  templateUrl: './novo-espaco.component.html',
  styleUrls: ['./novo-espaco.component.css']
})
export class NovoEspacoComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  espaco: Espaco = new Espaco()

  valor = ['R','$',' ',/[1-9]/, /\d/, /\d/,',', /\d/, /\d/,]

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private espacoService: EspacoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required,Validators.minLength(5)]],
      descricao: [null, [Validators.required]],
      qtdMax: [null, [Validators.required,Validators.pattern("^[0-9]*$"),]],
      valor: [null, [Validators.required]],
     
    })
  }

  cadastrar(){
    if (this.formulario.valid){
      this.espaco.nome= this.formulario.get('nome')?.value
      this.espaco.descricao= this.formulario.get('descricao')?.value
      this.espaco.qtdMax= this.formulario.get('qtdMax')?.value
      this.espaco.valor= this.formulario.get('valor')?.value
      this.espaco.quadra.id= this.loginService.getUsuarioLogado().idQuadra  

      
      this.espacoService.cadastrarEspaco(this.espaco).subscribe(e=>{
        if (e != null){
          alert("Espaço cadastrado com sucessso")
          this.router.navigate(['funcionario/espacos'])
        }else{
          alert("Erro ao cadastrar Espaço")  
        }
       
          
        })
    }
    
  }

  cancelar(){
    this.router.navigate(['funcionario/espacos']) 
  }


}
