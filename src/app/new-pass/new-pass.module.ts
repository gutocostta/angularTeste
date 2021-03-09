import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutModule } from './../public-layout/public-layout.module';
import { NewPassRoutingModule } from './new-pass-routing.module';
import { NewPassComponent } from './new-pass.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {
  MatNativeDateModule,
  MatSelectModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  declarations: [NewPassComponent],
  imports: [
    CommonModule,
    NewPassRoutingModule,
    PublicLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  exports: [NewPassComponent]
})
export class NewPassModule { }
