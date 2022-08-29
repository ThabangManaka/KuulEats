import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
 // @Input() items$: Observable<Cart>;
  @Input() items: any;

  itemsSubscription: Subscription;
  columnsToDisplay = ['quantityAndName', 'price'];
  dataSource: MatTableDataSource<any>;
  totalQuantity: number;
  totalPrice: number;
  constructor() { }

  ngOnInit(): void {
   console.log(this.items)
   
    this.dataSource = new MatTableDataSource<any>(this.items);
  }

}
