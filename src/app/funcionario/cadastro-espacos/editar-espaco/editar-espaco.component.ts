import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Espaco } from 'src/app/shared/model/espaco';
import { EspacoService } from 'src/app/shared/service/espaco.service';

@Component({
  selector: 'app-editar-espaco',
  templateUrl: './editar-espaco.component.html',
  styleUrls: ['./editar-espaco.component.css']
})
export class EditarEspacoComponent implements OnInit {

  espaco:Espaco = new Espaco()
  formulario: FormGroup= new FormGroup({});
  display_c = 'none'
  display_a = 'block'
  valor = ['R','$',' ',/[1-9]/, /\d/, /\d/,',', /\d/, /\d/,]

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private espacoService: EspacoService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.espacoService.getEspacoById(this.route.snapshot.paramMap.get('espaco')).subscribe(q=>{
      if (q != null){
        this.espaco = q 
        console.log(q)
      }else{
        alert("Não achou")  
      }
    })

    this.formulario = this.formBuilder.group({    

      id: [null,],
      nome: [null, [Validators.required,Validators.minLength(5)]],
      descricao: [null, [Validators.required]],
      qtdMax: [null, [Validators.required,Validators.pattern("^[0-9]*$"),]],
      valor: [null, [Validators.required]],
     
    })

    this.disableForm()    
  }


  alterar(){
   
    this.formulario.get('id')?.enable({ onlySelf: true });
    this.formulario.get('nome')?.enable({ onlySelf: true });
    this.formulario.get('descricao')?.enable({ onlySelf: true });
    this.formulario.get('qtdMax')?.enable({ onlySelf: true });
    this.formulario.get('valor')?.enable({ onlySelf: true });
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
    this.formulario.get('descricao')?.disable({ onlySelf: true });
    this.formulario.get('qtdMax')?.disable({ onlySelf: true });
    this.formulario.get('valor')?.disable({ onlySelf: true });
  }

  salvar(){  
    
    if (this.formulario.valid){
      
      
      this.espaco.nome= this.formulario.get('nome')?.value
      this.espaco.descricao= this.formulario.get('descricao')?.value
      this.espaco.qtdMax= this.formulario.get('qtdMax')?.value
      this.espaco.valor= this.formulario.get('valor')?.value    
    
    
      
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

  excluir(){

    this.espacoService.excluirEspaco(this.espaco).subscribe(e=>{
      console.log(e)
      if (e == "sucess"){
      
        alert("Espaço excluido com sucessso")
        this.router.navigate(['funcionario/espacos'])
      }else{
        alert("Erro ao excluir Espaço: "+e)  
      }      
        
      })   
    
    }

  

}
