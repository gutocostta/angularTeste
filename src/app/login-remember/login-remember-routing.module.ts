import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRememberComponent } from './login-remember.component';
import { PublicLayoutComponent } from '../public-layout/public-layout.component';
import { AuthenticationGuardService } from '@cnj/uikit';


const routes: Routes = [
  {
    path: 'lembrar-senha',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: LoginRememberComponent
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRememberRoutingModule { }
