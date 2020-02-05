import { ShoppingService } from './shopping.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[];

  constructor(private shopService: ShoppingService) { }

  ngOnInit() {
   this.ingredients = this.shopService.getIngredients();

  }
  

}
