import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_URL = "http://localhost:8080/auth";
export const httpOption = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any>{
    return this.http.post(AUTH_URL + '/login', {
      username: credentials.username,
      password: credentials.password
    },httpOption);
  }

  logout(){
    return this.http.get(AUTH_URL + '/logout');
  }
}
