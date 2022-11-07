import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { showMessageError } from 'src/app/helpers/toastError';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { MockReceipts } from '../../home/data/mock-chefs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  filteredRecipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private _snackBar: MatSnackBar
  ) {}

  name: string = '';
  ingredient: string = '';

  minValue: number = 0;
  maxValue: number = 200;
  minTime: number = 0;
  maxTime: number = 12;
  value: number = 0;
  timeValue: number = 0;

  ngOnInit(): void {
    this.recipeService.getLastestRecipes().subscribe(
      (res: Recipe[]) => {
        this.recipes = res;
        this.filteredRecipes = res;
      },
      (error) => {
        this.recipes = MockReceipts;
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en al cargar la pagina, refresque'
        );
      }
    );
  }

  filterRecipes() {
    this.filteredRecipes = this.recipes.filter((rec) =>
      rec.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase())
    );

    if (this.ingredient !== '') {
      this.filteredRecipes = this.filteredRecipes.filter((rec) =>
        rec.ingredients?.find((ingr) =>
          ingr.name
            .toLocaleLowerCase()
            .includes(this.ingredient.toLocaleLowerCase())
        )
      );
    }

    console.log('filtered', this.filteredRecipes);
  }
}
