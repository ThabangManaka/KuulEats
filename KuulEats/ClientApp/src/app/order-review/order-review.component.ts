import { Order, Orders } from './../models/Oder';
import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Address } from '../models/Address';
import { Cart } from '../models/Cart';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit {
  orderId: string | null;
  order: Orders;

  orderSubscription: Subscription;
  address$: Observable<Address>;
  itemsSubject: Cart;
  addressSubject: BehaviorSubject<Address>;


  constructor(public cartService: CartService,
    route: ActivatedRoute,
   public orderService: OrderService,) {
      this.orderId = route.snapshot.paramMap.get('id');

      this.orderService.getOrderObservable().subscribe(order => {
        console.log(order.cart)
        this.order = order
      })
     this.cartService.getCartObservable().subscribe(cart=> {
      //this.itemsSubject.next(cart)
     })

    this.addressSubject = new BehaviorSubject(new Address());
  }

  ngOnInit(): void {
  }

}
