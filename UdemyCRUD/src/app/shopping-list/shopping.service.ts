import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor() { }

  ingredientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients : Ingredient[]= [
    new Ingredient('Apple',5),
    new Ingredient('Tomato',10),

  ];

  getIngredients(){
  return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    return this.ingredients.push(ingredient);
    return this.ingredientsChanged.emit(this.ingredients.slice());
  }

 
}
