import {OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export class RecipeService {

    recipeItems = new BehaviorSubject<Recipe[]>([]);

    recipes: Recipe[] = [
        new Recipe('Recipe1', '1', 'image1'),
        new Recipe('Recipe2', '2', 'image2'),
        new Recipe('Recipe3', '3', 'image3'),
    ]

    constructor(){
        this.recipeItems.next(this.recipes);
    }

    deleteRecipe(id){
        this.recipes.splice(id, 1);
        this.recipeItems.next(this.recipes);
    }
}