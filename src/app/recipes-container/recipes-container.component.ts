import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-recipes-container',
  templateUrl: './recipes-container.component.html',
  styleUrls: ['./recipes-container.component.css']
})
export class RecipesContainerComponent implements OnInit {
  readonly RowOptions =  {
    small: 1,
    medium: 2,
    large: 3
  }
  readonly ROW_NUM = 6
  readonly ROW_LIST = [0,1,2,3,4,5];

  constructor(private recipeService: RecipeService) { }
  
  recipesPerRow = this.RowOptions.large;
  
  recipes: Recipe[];
  ngOnInit(): void {
    this.recipes = [];
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data as Recipe[];
    });
  }
  GetRecipesInRow(index: number) {
    return this.recipes.slice(index * this.recipesPerRow, (index+1)*this.recipesPerRow)
  }
  

}
