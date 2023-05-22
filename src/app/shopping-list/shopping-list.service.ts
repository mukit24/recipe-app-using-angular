import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients : Ingredient[] = [
    new Ingredient('Tomato', 5),
    new Ingredient('Apple', 3),
  ]

  getIngredient(index: number){
    return this.ingredients[index];
  }

  getIngredients(){
    return this.ingredients;
  };

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
  };

  editIngredients(index: number, newIng: Ingredient){
    this.ingredients[index] = newIng;
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
  }

  constructor() { }
}
