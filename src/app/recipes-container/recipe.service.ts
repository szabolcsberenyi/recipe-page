import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Difficulty, Recipe } from './recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }
  url = "assets/recipes.json"
  getRecipes() {
    return this.http.get<Recipe[]>(this.url)
  }
}
