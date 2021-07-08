import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorDashboardComponent } from './professor-dashboard/professor-dashboard.component';
import { ProfessorUpdateComponent } from './professor-update/professor-update.component';
import { ProfessorSignupComponent } from './professor-signup/professor-signup.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { LinkListComponent } from './link-list/link-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { FormsModule } from '@angular/forms';
import { ProfessorComponent } from './professor.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    ProfessorComponent,
    ProfessorDashboardComponent,
    ProfessorUpdateComponent,
    ProfessorSignupComponent,
    ProfessorLoginComponent,
    LinkListComponent,
    MessageListComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule,
    FormsModule,
    MatTabsModule
  ]
})
export class ProfessorModule { }
