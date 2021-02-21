import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuardService } from '@cnj/uikit';


const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  { path: '**', redirectTo: 'not-found' } // NotFoundComponent está no UiKit (assim como sua rota)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
