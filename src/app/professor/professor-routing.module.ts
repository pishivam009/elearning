import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorGuard } from '../professor.guard';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { ProfessorUpdateComponent } from './professor-update/professor-update.component';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  {path:'professor', component:ProfessorComponent, canActivateChild: [ProfessorGuard],
  children: [
    
    {path:'dashboard', component:ProfessorDashboardComponent},
    {path:'update', component:ProfessorUpdateComponent}
  ]},
  {path:'professor/login', component:ProfessorLoginComponent},
  {path:'professor/signup', component:ProfessorSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
