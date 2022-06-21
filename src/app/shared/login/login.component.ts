import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({

      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  
    })
  }

  fazerLogin(){
    console.log("login")
  }

 
}
