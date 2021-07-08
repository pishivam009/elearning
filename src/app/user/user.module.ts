import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from './send-message/send-message.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ViewLinkComponent } from './view-link/view-link.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    UserComponent,
    SendMessageComponent,
    UserDashboardComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserUpdateComponent,
    ViewLinkComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatTabsModule
  ]
})
export class UserModule { }
