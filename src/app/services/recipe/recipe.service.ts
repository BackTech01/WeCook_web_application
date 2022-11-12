import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Recipe, RecipeDTO } from 'src/app/models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  baseUrl = environment.apiUrl + ':8093/recipes/';

  constructor(private http: HttpClient) {}

  getRecipeById(recipeId: string): Observable<Recipe> {
    const url = this.baseUrl + recipeId;
    return this.http.get<Recipe>(url);
  }

  createRecipe(recipe: RecipeDTO): Observable<Recipe> {
    const url = this.baseUrl;
    return this.http.post<Recipe>(url, recipe);
  }

  getRecipesByIngredients(ingredientName: string): Observable<Recipe[]> {
    const url = this.baseUrl + '?q=' + ingredientName;
    return this.http.get<Recipe[]>(url);
  }

  getLastestRecipes(): Observable<Recipe[]> {
    const url = this.baseUrl;
    return this.http.get<Recipe[]>(url);
  }

  getAllRecipes(): Observable<Recipe[]> {
    const url = this.baseUrl;
    return this.http.get<Recipe[]>(
      url
    ) /*.pipe(retry(2), catchError(this.handleError))*/;
  }
  getRecipesByProfileId(id: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(
      `${environment.apiUrl}:8091/profiles/${id}/recipes`
    ) /*.pipe(retry(2), catchError(this.handleError))*/;
  }

  addIngredientToReceipe(
    recipeId: number,
    ingredientId: number
  ): Observable<any> {
    const url = `${this.baseUrl}${recipeId}/ingredients/${ingredientId}`;
    return this.http.post<any>(url, undefined);
  }
}
