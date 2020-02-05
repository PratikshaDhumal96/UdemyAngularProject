import { ShoppingService } from './../shopping.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('nameInput' ) nameInputRef : ElementRef;
 @ViewChild('amountinput') amountInputRef :ElementRef;


// @Output()
// IngredientAdded : EventEmitter<Ingredient>= new EventEmitter();

  constructor(private shopService : ShoppingService) { }

  ngOnInit() {
  }

  OnAddItem(){
// here is the error of nativeElement..does not work this code.
    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
   const newIngredient = new Ingredient(nameIng,amountIng);
  this.shopService.addIngredient(newIngredient);
   
  }

}
