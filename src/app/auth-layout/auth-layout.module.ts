import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AuthLayoutComponent } from './auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  UikitModule,
  NotFoundModule,
  AuthModule,
  OidcAuthModule,
  UnauthorizedModule,
  LogModule,
} from "@cnj/uikit";


@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    UikitModule,
    LogModule,
    NotFoundModule,
    UnauthorizedModule,
    AuthModule,
    OidcAuthModule,
  ],
  exports: [AuthLayoutComponent]
})
export class AuthLayoutModule { }
