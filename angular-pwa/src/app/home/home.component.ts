import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeItems
      .subscribe(items => {
        this.recipes = items;
      })
  }

  onDelete(id){
    this.recipeService.deleteRecipe(id);
  }
  onAddNew(){
    
  }

}
