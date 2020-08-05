import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { ConfigComponent } from './users/config/config.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [StatisticsComponent,ConfigComponent,ProfileComponent,LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
