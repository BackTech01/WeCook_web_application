import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { showMessageError } from 'src/app/helpers/toastError';
import {
  Comment,
  CommentComplete,
  CommentResponse,
} from 'src/app/models/comment';
import { Profile } from 'src/app/models/profile';
import { Recipe } from 'src/app/models/recipe';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.css'],
})
export class DetailRecipeComponent implements OnInit {
  loading = false;
  profiles: Profile[] = [];
  actualRecipe?: Recipe;
  autor?: Profile | undefined;
  multimediaUrl?: string;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,

    private profileService: ProfileService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadReceiptById();
  }

  loadAllUsersAndAssign(profileId: number) {
    this.profileService.getLastestProfiles().subscribe(
      (res: Profile[]) => {
        this.profiles = res;
        this.autor = this.profiles.find((p) => p.id === profileId);
      },
      (error) => {
        showMessageError(
          this._snackBar,
          'Ha ocurrido un error en el servicio, intente de nuevo'
        );
      }
    );
  }

  getRecipeId() {
    let myId = 0;
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log('First');
        let id = params['id'];
        if (id != null) {
          myId = +id;
        }
      },
      (error) => {
        myId = 0;
      }
    );
    console.log('second');
    return myId;
  }

  loadReceiptById(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        let id = params['id'];
        if (id != null) {
          this.recipeService.getRecipeById(id).subscribe((recipe: Recipe) => {
            this.actualRecipe = recipe;
            this.multimediaUrl = this.actualRecipe.multimedia[0].url;
            console.log("multimediaUrl: ",this.actualRecipe.multimedia[0].url)
            this.loadAllUsersAndAssign(recipe.profileId);
          });
        }
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }

  getRecipeIngredientNames() {
    if (this.actualRecipe === undefined) return [];

    return (
      this.actualRecipe.ingredients?.map((ingredient) => ingredient.name) || []
    );
  }

  getProfileNameById(id: number) {
    return this.profiles.find((profile) => profile.id === id)?.name;
  }

  getPreparationLists() {
    if (this.actualRecipe === undefined) return [];
    let arrayPreparation = this.actualRecipe?.preparation.split('. ');

    return arrayPreparation;

  }

  addProfileNameToComment() {}
}
