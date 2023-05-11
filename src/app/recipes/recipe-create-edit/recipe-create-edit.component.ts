import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-create-edit',
  templateUrl: './recipe-create-edit.component.html',
  styleUrls: ['./recipe-create-edit.component.css']
})
export class RecipeCreateEditComponent implements OnInit{
  id: number;
  editMode = false;

  constructor( private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = this.id != null;
      }
    )
  }
}
