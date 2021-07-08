import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LinkListComponent } from './link-list/link-list.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MessageListComponent } from './message-list/message-list.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    LinkListComponent,
    ProfessorListComponent,
    UserListComponent,
    MessageListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatTabsModule,
    MatTabsModule
  ]
})
export class AdminModule { }
