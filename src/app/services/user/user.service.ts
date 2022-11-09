import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserDTO } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  headers = 
    {
    'Content-Type':  'application/json',
    'x-Flatten': 'true',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers':'*'
    }
  

  login(data: UserDTO): Observable<UserDTO> {
    const body=JSON.stringify(data);
    return this.http.post<UserDTO>(`${environment.apiUrl}/profiles/users/login`, data, {'headers': this.headers});
  }
}
