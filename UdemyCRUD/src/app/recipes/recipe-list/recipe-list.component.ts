import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit { 
  @Output()
  RecipeWasSelected= new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe','This is a Simple Test Recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSyd7mOFwALltpuPgksjx5nmRgaRKuLRyJTqDpPcRtf05Mb_IIA&s'),
    new Recipe('Another Test Recipe','This is a Simple Test Recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSyd7mOFwALltpuPgksjx5nmRgaRKuLRyJTqDpPcRtf05Mb_IIA&s')
  ];
  constructor() { }

  ngOnInit() {
  }

  OnRecipeSelected(recipe : Recipe){
    this.RecipeWasSelected.emit(recipe);

      
  }

}
