import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Tasty Recipe',
      'Bla bla bla',
      'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg',
      [new Ingredient('Meat', 1),
      new Ingredient('Fries', 2)]),
    new Recipe(
      'A Tasty Recipe 2',
      'Bla bla bla',
      'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg',
      [new Ingredient('Meat', 3)]),
  ]

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index]= newRecipe;
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
  }

  constructor() { }
}
