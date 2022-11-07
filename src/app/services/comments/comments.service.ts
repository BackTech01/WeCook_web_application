import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment, CommentDTO, CommentResponse } from 'src/app/models/comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getAllComentsByRecipeId(recipeId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${environment.apiUrl}/recipes/${recipeId}/comments/`
    );
  }

  createCommentInRecipe(
    comment: CommentDTO,
    recipeId: number
  ): Observable<CommentResponse> {
    return this.http.post<CommentResponse>(
      `${environment.apiUrl}/recipes/${recipeId}/comments/`,
      comment
    );
  }
}
