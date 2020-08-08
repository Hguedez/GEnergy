import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { ConfigComponent } from './users/config/config.component';
import { ProfileComponent } from './users/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReportsComponent } from './reports/reports.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [StatisticsComponent,ConfigComponent,ProfileComponent,LoginComponent,RegisterComponent, ReportsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChartsModule
  ]
})
export class PagesModule { }
