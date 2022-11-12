import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserDTO } from 'src/app/models/user';
import { UserProfile } from 'src/app/models/userProfile';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  createUser(data: UserDTO): Observable<UserDTO> {
    return this.http.post<User>(
      `${environment.apiUrl}:8091/profiles/users/register`,
      data
    );
  }

  createProfileByUserId(
    id: number,
    data: UserProfile
  ): Observable<UserProfile> {
    return this.http.post<UserProfile>(
      `${environment.apiUrl}:8091/profiles/users/${id}/profiles`,
      data
    );
  }
}
