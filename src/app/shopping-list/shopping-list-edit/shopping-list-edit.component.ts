import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { ShoppingListComponent } from '../shopping-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  @ViewChild('f') slForm: NgForm;

  editMode = false;
  index : number;
  editItem: Ingredient;
 
  constructor(private slService: ShoppingListService, private slCom: ShoppingListComponent){}

  ngOnInit(): void {
    this.subscription = this.slCom.indexSubject.subscribe( data => {
      this.index = data;
      this.editMode = true;
      this.editItem = this.slService.getIngredient(this.index);
      this.slForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    })
  }

  
  onSubmit(form: NgForm){
    let value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.editIngredients(this.index, newIng);
    }else{
      this.slService.addIngredient(newIng);
    }
    this.onClear()
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.slService.deleteIngredient(this.index);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
