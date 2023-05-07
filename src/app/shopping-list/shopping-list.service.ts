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

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  constructor() { }
}
