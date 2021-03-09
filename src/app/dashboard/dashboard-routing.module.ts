import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthenticationGuardService } from '@cnj/uikit';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';

const routes: Routes = [
  //{path: 'dashboard', component: DashboardComponent, data: { id: 1 } },
  {
    path: 'dashboard',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { id: 1 }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
