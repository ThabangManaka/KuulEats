import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCardComponent } from './components/reservation-card/reservation-card.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReservationCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
    exports: [
      ReservationCardComponent
      ]
})
export class SharedModule { }
