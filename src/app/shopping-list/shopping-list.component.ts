import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  indexSubject: Subject<number> = new Subject<number>();
  ingredients : Ingredient[];

  constructor(private slService: ShoppingListService){}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
  }

  passIndex(index: number){
    this.indexSubject.next(index);
  }
}
