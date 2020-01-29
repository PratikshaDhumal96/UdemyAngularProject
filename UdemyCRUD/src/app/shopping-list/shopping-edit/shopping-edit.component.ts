import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

 @ViewChild('nameInput' ) nameInputRef : ElementRef;
 @ViewChild('amountinput') amountInputRef :ElementRef;

 @Output() IngredientAdded = new EventEmitter<Ingredient>();
// @Output()
// IngredientAdded : EventEmitter<Ingredient>= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnAddItem(){
// here is the error of nativeElement..does not work this code.
    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
   const newIngredient = new Ingredient(nameIng,amountIng);

    this.IngredientAdded.emit(newIngredient);
   
  }

}
