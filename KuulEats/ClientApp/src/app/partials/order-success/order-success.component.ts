import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements  OnDestroy {
  queryParamsSubscription: Subscription;
  orderId: string;
  constructor(route: ActivatedRoute, router: Router) {
    this.queryParamsSubscription = route.queryParams.subscribe(
      (params: Params) => {
        this.orderId = params.orderId;

        if (!params.orderId) {
          console.error('Tried to access order-success without an orderId');
          router.navigate(['/']);
        }
      }
    );
   }

  ngOnDestroy() {
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
}
}
