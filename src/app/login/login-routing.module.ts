import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { PublicLayoutComponent } from '../public-layout/public-layout.component';
import { AuthenticationGuardService } from '@cnj/uikit';


const routes: Routes = [
  {
    path: 'home',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
