import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Orders } from '../models/Oder';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class MyOrdersComponent implements OnInit {
  columnsToDisplay = ['products', 'totalPrice', 'date', 'link'];
  dataSource: any;
  ordersSubscription: Subscription;
  filterValue: string;
  orders : Orders[];
  expandedOrder: Orders | null; // TODO: really necessary? can't any object be null implicitly?
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(orderService: OrderService) { 
    this.dataSource = new MatTableDataSource<any>();

    this.ordersSubscription = orderService.getOrderObservable().subscribe(orders =>{
        orders = orders,
        console.log(orders)
      this.dataSource = new MatTableDataSource<Orders>(this.orders)
    })
  }

  ngOnInit(): void {
  }

}
