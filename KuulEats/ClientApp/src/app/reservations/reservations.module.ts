import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReservationsComponent } from './reservations.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReservationsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class ReservationsModule { }
