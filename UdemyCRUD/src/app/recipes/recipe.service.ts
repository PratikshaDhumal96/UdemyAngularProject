import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

 private recipes : Recipe[] = [
    new Recipe('A Test Recipe','This is a Simple Test Recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSyd7mOFwALltpuPgksjx5nmRgaRKuLRyJTqDpPcRtf05Mb_IIA&s'),
    new Recipe('Another Test Recipe','This is a Simple Test Recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSyd7mOFwALltpuPgksjx5nmRgaRKuLRyJTqDpPcRtf05Mb_IIA&s')
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }

}
