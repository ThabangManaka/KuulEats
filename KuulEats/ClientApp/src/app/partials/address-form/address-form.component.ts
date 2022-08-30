import { Address } from './../../models/Address';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() isReadOnly: boolean;
  @Input() address$: Observable<Address>;
  @Output() addressSubmitted = new EventEmitter();

  address: Address;
  addressSubscription: Subscription;
  constructor() {
    this.address = new Address();
    this.address.addressLines = [];
  }

  ngOnInit(): void {
  }

    onSubmit() {
    this.addressSubmitted.emit(this.address);
  }

}
