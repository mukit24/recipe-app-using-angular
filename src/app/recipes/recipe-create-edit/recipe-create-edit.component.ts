import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-create-edit',
  templateUrl: './recipe-create-edit.component.html',
  styleUrls: ['./recipe-create-edit.component.css']
})
export class RecipeCreateEditComponent implements OnInit{
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor( private route: ActivatedRoute, private recipeService: RecipeService){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = this.id >= 0 ? true : false;
        this.initForm();
      }
    )
  }

  onSubmit(){
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }  
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required ),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  private initForm(){
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe?.name;
      recipeDescription = recipe?.description;
      recipeImagePath = recipe?.imagePath;
      if(recipe?.ingredients){
        for(let ingredient of recipe?.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'ingredients': recipeIngredients
    })

  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
