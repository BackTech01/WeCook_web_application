import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Profile } from 'src/app/models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl + '/profiles';

  getProfileById(profileId: string): Observable<Profile> {
    // const url = this.baseUrl + '/' + profileId;
    const url = this.baseUrl + profileId;
    console.log('URL', url);
    return this.http.get<Profile>(
      `${environment.apiUrl}/profiles/${profileId}`
    );
  }

  getLastestProfiles(): Observable<Profile[]> {
    const url = this.baseUrl;
    return this.http.get<Profile[]>(`${environment.apiUrl}/profiles/`);
  }

  getMyProfile() {
    return localStorage.getItem('userId');
  }
}
