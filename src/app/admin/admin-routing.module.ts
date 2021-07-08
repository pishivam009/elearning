import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, canActivateChild: [AdminGuard], children: [

      {
        path: 'dashboard', component: AdminDashboardComponent
      }

    ]
  },
  { path: 'admin/login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
