import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  panelOpenState = false;
  constructor(private router: Router,public _snackBar: MatSnackBar) { }
  sploaded:boolean = true;
  ngOnInit(): void {
    this.loadSpinner();
  }

  openSnackBar(message: string){
    this._snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
  }

  loadSpinner(){
    setTimeout(()=>{
      this.sploaded = false;
    },3000);
  }

  downloadReport(){
    this.openSnackBar('Descargando reporte');
  }
  logOut(){
    this.router.navigate(['/']);
  }
}
