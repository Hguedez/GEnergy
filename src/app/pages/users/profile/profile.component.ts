import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '13:00'},
  {position: 2, name: '13:01'},
  {position: 3, name: '13:02'},
  {position: 4, name: '13:03'},
  {position: 5, name: '13:04'},
  {position: 6, name: '13:05'},
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {

  sploaded:boolean = true;
  constructor(private router: Router) { }

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    this.loadSpinner();
  }

  loadSpinner(){
    setTimeout(()=>{
      this.sploaded = false;
    },3000);
  }

  logOut(){
    this.router.navigate(['/']);
  }
}
