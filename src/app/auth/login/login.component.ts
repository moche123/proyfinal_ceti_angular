import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.loginForm.invalid){
      alert('FORMULARIO INVALIDO')
    }else{

      alert(this.loginForm.value);
    }
  }

  fieldIsInvalid(field:string){
    return this.loginForm.controls[field].errors
  }
      

}
