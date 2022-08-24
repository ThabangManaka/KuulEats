import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/Cart';
import { Food } from '../models/Food';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  cart!: Cart;
  food!: Food;
  reservationId: any;
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
    private cartService:CartService, private router: Router) {
      this.reservationId= activatedRoute.snapshot.paramMap.get('id');
      console.log(this.reservationId)
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = foodService.getFoodById(params.id);
    })

    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
      console.log(this.cart)
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigate(['/cart-page/',this.reservationId]);
  }
}
