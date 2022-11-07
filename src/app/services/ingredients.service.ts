import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient, IngredientDTO } from '../models/ingredient';
import { Recipe, RecipeDTO } from '../models/recipe';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  baseUrl = environment.apiUrl + '/ingredients/';

  constructor(private http: HttpClient) {}

  createIngredient(ingredient: IngredientDTO): Observable<Ingredient> {
    const url = this.baseUrl;
    return this.http.post<Ingredient>(url, ingredient);
  }
}
