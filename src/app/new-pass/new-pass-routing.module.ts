import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPassComponent } from './new-pass.component';
import { PublicLayoutComponent } from '../public-layout/public-layout.component';
import { AuthenticationGuardService } from '@cnj/uikit';


const routes: Routes = [
  {
    path: 'nova-senha',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: NewPassComponent
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPassRoutingModule { }
