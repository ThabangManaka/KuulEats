import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../models/Food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  foods: Food[] = [];
  reservationId: any;
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {

    this.reservationId= activatedRoute.snapshot.paramMap.get('id');
     console.log(this.reservationId)
    activatedRoute.params.subscribe((params) => {
      console.log(params)
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = foodService.getAll();
    })
  }
  ngOnInit(): void {
  }

}
