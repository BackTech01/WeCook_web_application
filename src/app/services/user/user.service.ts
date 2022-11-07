import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserDTO } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(data: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(`${environment.apiUrl}/login`, data);
  }
}
