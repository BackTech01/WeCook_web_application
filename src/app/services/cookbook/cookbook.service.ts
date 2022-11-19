import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookbook, CookbookDTO } from 'src/app/models/cookbook';
import { Recipe } from 'src/app/models/recipe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookbookService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  getAllCookbooksByProfileId(profileId: any): Observable<Cookbook[]> {
    const url = this.baseUrl + `:8094/cookbooks/profiles/${profileId}/cookbooks`
    return this.http.get<Cookbook[]>(url)
  }


  getAllRecipesByCookbookId(cookbookId: any): Observable<Recipe[]> {
    const url = this.baseUrl + `:8093/recipes/cookbooks/${cookbookId}/recipes`;
    return this.http.get<Recipe[]>(url);
  }

  createCookbook(profileId: number, data: CookbookDTO): Observable<Cookbook> {
    data.profileId = profileId
    const url = this.baseUrl + ':8094/cookbooks'
    return this.http.post<Cookbook>(url, data)
  }

  createCookbookpart2 (cookbookId: number) : Observable<Cookbook> {
    const url = this.baseUrl + ':8092/recipes/cookbooks'
    const body = {id: cookbookId}
    return this.http.post<Cookbook>(url, body)
  }

  assignRecipeToCookbook (recipeId: number, cookbookId: number): Observable<any>  {
    const url = this.baseUrl + `:8092/recipes/${recipeId}/cookbooks/${cookbookId}`
    return this.http.post<any>(url, null)
  }
}
