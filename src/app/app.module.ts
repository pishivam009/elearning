import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProfessorComponent } from './professor/professor.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { ProfessorListComponent } from './admin/professor-list/professor-list.component';
import { LinkListComponent } from './admin/link-list/link-list.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { ViewLinkComponent } from './user/view-link/view-link.component';
import { SendMessageComponent } from './user/send-message/send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ProfessorComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    UserListComponent,
    ProfessorListComponent,
    LinkListComponent,
    UserDashboardComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserUpdateComponent,
    ViewLinkComponent,
    SendMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
