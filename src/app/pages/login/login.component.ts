import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  disabled:boolean = false;
  constructor( private _builder:FormBuilder,private router: Router,
    public _snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.ValidateForms();
  }

  openSnackBar(message: string){
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
  }

  loginUser(){
    let formData = new FormData();
    formData.append('Email', this.loginForm.get('Email').value);
    formData.append('Password', this.loginForm.get('Password').value);
  }

  ValidateForms(){
    this.loginForm = this._builder.group({
      Email: ['',Validators.compose([Validators.required])],
      Password: ['',Validators.compose([Validators.required])]
    })
  }

  deviceSelected(){
    this.openSnackBar('Dispositivo seleccionado');
  }
}
