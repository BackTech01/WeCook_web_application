import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { CookbookService } from 'src/app/services/cookbook/cookbook.service';

@Component({
  selector: 'app-recetarie-recipes',
  templateUrl: './recetarie-recipes.component.html',
  styleUrls: ['./recetarie-recipes.component.css']
})
export class RecetarieRecipesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private cookbookService: CookbookService) { }


  actualRecipes: Recipe[] = [];
  cookbookId: number = 0  
  nameCookbook: string = 'Fake Recetario 1'

  ngOnInit(): void {
    this.loadReceiptsByCookbookId()
    
  }

  getRecipeId() {
    let myId = 0;
    this.activatedRoute.params.subscribe(
      (params) => {
        //console.log('First');
        let id = params['id'];
        if (id != null) {
          myId = +id;
        }
      },
      (error) => {
        myId = 0;
      }
    );
    //console.log('second');
    return myId;
  }

  loadReceiptsByCookbookId(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        let id = params['id'];
        if (id != null) {
          this.nameCookbook = history.state.name
          this.cookbookService.getAllRecipesByCookbookId(id).subscribe((recipes: Recipe[]) => {
            this.actualRecipes = recipes;
            //this.multimediaUrl = this.actualRecipe.multimedia[0].url;
            //console.log("multimediaUrl: ",this.actualRecipe.multimedia[0].url)
            //this.loadAllUsersAndAssign(recipe.profileId);
                      ///
          this.cookbookId = +id
          });
        }
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }
}
