import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  
  private recipes : Recipe[] = [
    new Recipe('A Tasty Recipe', 'Bla bla bla', 'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg'),
    new Recipe('A Tasty Recipe 2', 'Bla bla bla', 'https://img.taste.com.au/p3Tp-7AU/w643-h428-cfill-q90/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg'),
  ]

  getRecipes(){
    return this.recipes.slice();
  }

  constructor() { }
}
