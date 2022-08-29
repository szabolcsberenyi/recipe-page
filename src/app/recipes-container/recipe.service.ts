import { Injectable } from '@angular/core';
import { Difficulty, Recipe } from './recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", Difficulty.easy, 20, "No image", [["test ingredient", 20]], ["test step", "test step 2"])
  ]
  constructor() { }
}
