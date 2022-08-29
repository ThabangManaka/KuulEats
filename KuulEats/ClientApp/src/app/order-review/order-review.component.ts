import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from '../models/Address';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.scss']
})
export class OrderReviewComponent implements OnInit {
  address$: Observable<Address>;
  itemsSubject: BehaviorSubject<Cart>;
  addressSubject: BehaviorSubject<Address>;
  constructor(public cartService: CartService) {

     this.cartService.getCartObservable().subscribe(cart=> {
      this.itemsSubject.next(cart)
     })

    this.addressSubject = new BehaviorSubject(new Address());
  }

  ngOnInit(): void {
  }

}
