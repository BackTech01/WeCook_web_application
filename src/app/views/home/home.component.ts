import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { showMessageError } from 'src/app/helpers/toastError';
import { Chef } from 'src/app/models/chef';
import { Profile } from 'src/app/models/profile';
import { Recipe } from 'src/app/models/recipe';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { MockChefs, MockReceipts } from './data/mock-chefs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chefs: Pick<Profile, 'id' | 'name' | 'profilePictureUrl'>[] = [];
  recipes: Recipe[] = [];
  constructor(
    private recipeService: RecipeService,
    private profileService: ProfileService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recipeService.getLastestRecipes().subscribe(
      (res: Recipe[]) => {
        this.recipes = res;
        //console.log(this.recipes[0].multimedia[0].url);
      },
      (error) => {
        this.recipes = MockReceipts;
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en al cargar la pagina, refresque'
        );
      }
    );

    this.profileService.getLastestProfiles().subscribe(
      (res: Pick<Profile, 'id' | 'name' | 'profilePictureUrl'>[]) => {
        this.chefs = res.splice(0, 3);
      },
      (error) => {
        //En caso backend falle
        this.chefs = MockChefs;
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en al cargar la pagina, refresque'
        );
      }
    );
    /*this.recipeService.getLastestRecipes().subscribe(data => this.lastestRecipes = data);
    this.profileService.getLastestProfiles().subscribe(data => this.popularChefs= data);*/
  }
}
