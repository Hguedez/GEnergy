import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './pages/admin/statistics/statistics.component';
import { ConfigComponent } from './pages/users/config/config.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'statistics', component:StatisticsComponent},
  { path: 'config', component:ConfigComponent},
  { path: 'reports', component:ReportsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
