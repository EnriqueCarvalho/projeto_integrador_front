import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quadra } from 'src/app/shared/model/quadra';
import { LoginService } from 'src/app/shared/service/login.service';
import { QuadraService } from 'src/app/shared/service/quadra.service';

@Component({
  selector: 'app-cadastro-quadra',
  templateUrl: './cadastro-quadra.component.html',
  styleUrls: ['./cadastro-quadra.component.css']
})
export class CadastroQuadraComponent implements OnInit {

  quadra:Quadra = new Quadra()
  formulario: FormGroup = new FormGroup({});
  display_c = 'none'
  display_a = 'block'

  constructor(
    private quadraService:QuadraService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.quadraService.getQuadra().subscribe(q=>{
      if (q != null){
        this.quadra = q 
        console.log(q)
      }else{
        alert("Não achou")  
      }
    })

    this.formulario = this.formBuilder.group({    

      id: [null,],
      nome: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(5)]],
      cnpj: [null, [Validators.required, Validators.maxLength(14)]],
      cep: [null, [Validators.required, Validators.maxLength(14)]],
      ruaEnd: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(5)]],
      bairroEnd: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(4)]],
      nroEnd: [null, [Validators.required, Validators.maxLength(35),Validators.minLength(1)]],
     
    })

    this.disableForm()
  }

  salvar(){  
    
    if (this.formulario.valid){
      
      this.quadra.nome= this.formulario.get('nome')?.value
      this.quadra.cnpj= this.formulario.get('cnpj')?.value
      this.quadra.cep= this.formulario.get('cep')?.value
      this.quadra.ruaEnd= this.formulario.get('ruaEnd')?.value
      this.quadra.bairroEnd= this.formulario.get('bairroEnd')?.value
      this.quadra.nroEnd= this.formulario.get('nroEnd')?.value     
    
    
      
      this.quadraService.alterarQuadra(this.quadra).subscribe( m => {
        if(m == "sucess"){
          this.loginService.homebyLogin()
          alert("Cadastro alterado com sucesso")
        }
        
      })     
      
    }
  }

  alterar(){
   
      this.formulario.get('id')?.enable({ onlySelf: true });
      this.formulario.get('nome')?.enable({ onlySelf: true });
      this.formulario.get('cnpj')?.enable({ onlySelf: true });
      this.formulario.get('cep')?.enable({ onlySelf: true });
      this.formulario.get('ruaEnd')?.enable({ onlySelf: true });
      this.formulario.get('bairroEnd')?.enable({ onlySelf: true });
      this.formulario.get('nroEnd')?.enable({ onlySelf: true });
        this.display_c = 'block'
        this.display_a = 'none'
    
      
      console.log("alterar");
  }

  cancelar(){
    this.disableForm()
    this.display_c = 'none'
    this.display_a = 'block'
    console.log("cancelar");  
  }

  disableForm(){
    this.formulario.get('id')?.disable({ onlySelf: true });
    this.formulario.get('nome')?.disable({ onlySelf: true });
    this.formulario.get('cnpj')?.disable({ onlySelf: true });
    this.formulario.get('cep')?.disable({ onlySelf: true });
    this.formulario.get('ruaEnd')?.disable({ onlySelf: true });
    this.formulario.get('bairroEnd')?.disable({ onlySelf: true });
    this.formulario.get('nroEnd')?.disable({ onlySelf: true });
  
  }

}
