import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipes-row',
  templateUrl: './recipes-row.component.html',
  styleUrls: ['./recipes-row.component.css']
})
export class RecipesRowComponent implements OnInit {

  constructor() { }

  @Input() recipes: Recipe[]

  ngOnInit(): void {
  }

}
