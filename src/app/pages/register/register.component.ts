import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  validateConfig: FormGroup;
  constructor(private _builder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  configValidation(){
    let formData = new FormData();
    formData.append('Ubicacion', this.validateConfig.get('Ubicacion').value);
    
  }

}
