import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit{
 
  constructor(private slService: ShoppingListService, private slCom: ShoppingListComponent){}

  ngOnInit(): void {
    this.slCom.indexSubject.subscribe( data => {
      console.log(data);
    })
  }
  onAddItem(form: NgForm){
    let value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIng);
  }

  getIndex(event: any){

  }
}
