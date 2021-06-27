import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ProfessorUpdateComponent } from './professor-update/professor-update.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { LinkListComponent } from './link-list/link-list.component';
import { MessageListComponent } from './message-list/message-list.component';


@NgModule({
  declarations: [
    ProfessorDashboardComponent,
    ProfessorUpdateComponent,
    ProfessorSignupComponent,
    ProfessorLoginComponent,
    LinkListComponent,
    MessageListComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
