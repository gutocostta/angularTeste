import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthLayoutComponent } from './auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCATION_TOKEN } from '../app.component';

import {
  UikitModule,
  NotFoundModule,
  AuthModule,
  OidcAuthModule,
  UnauthorizedModule,
  LogModule,
} from '@cnj/uikit';


@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    UikitModule,
    LogModule,
    NotFoundModule,
    UnauthorizedModule,
    AuthModule,
    OidcAuthModule
  ],
  exports: [AuthLayoutComponent],
  providers: [
    // Serviço de pesquisa para o Layout (Shell) que retorna os itens de menus
    { provide: LOCATION_TOKEN, useValue: window.location },
  ],
})
export class AuthLayoutModule { }
