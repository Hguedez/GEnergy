import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { ConfigComponent } from './users/config/config.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'statistics', component:StatisticsComponent},
  { path: 'config', component:ConfigComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PagesroutingModule { }
