import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-recipes-container',
  templateUrl: './recipes-container.component.html',
  styleUrls: ['./recipes-container.component.css']
})
export class RecipesContainerComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  recipes: Recipe[] | undefined;
  ngOnInit(): void {
    this.recipes = [];
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data as Recipe[];
    });
  }




}
