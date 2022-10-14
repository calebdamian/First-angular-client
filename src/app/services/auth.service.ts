import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { ILoggedUser } from '../interfaces/logged_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  BASE_URL: string = 'http://127.0.0.1:3000/auth';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  loginUser(loggedInUser: ILoggedUser): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, loggedInUser);
  }

}
