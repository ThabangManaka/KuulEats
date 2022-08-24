import { Reservation } from './../../../models/reservation';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent implements OnInit {
  @Input('reservation') reservation: Reservation
  constructor() { }

  ngOnInit(): void {
  }

}
