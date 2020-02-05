import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit { 


  recipes : Recipe[] 
  constructor(private recipeSer : RecipeService) { }

  ngOnInit() {
   this.recipes = this.recipeSer.getRecipes();
   
  }



}
