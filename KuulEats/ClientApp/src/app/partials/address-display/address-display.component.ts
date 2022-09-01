import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-address-display',
  templateUrl: './address-display.component.html',
  styleUrls: ['./address-display.component.scss']
})
export class AddressDisplayComponent implements OnInit {
  @Input() address: Address;
  constructor() { }

  ngOnInit(): void {
  }

}
