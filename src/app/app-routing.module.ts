import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuardService } from '@cnj/uikit';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: './login/login.module#LoginModule'
  // },
  { path: '**', redirectTo: 'not-found' } // NotFoundComponent está no UiKit (assim como sua rota)
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
