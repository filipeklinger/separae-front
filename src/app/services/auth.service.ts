import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// common
const authRoute = 'https://localhost:5001/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: {login: string, password: string} ): Observable<any> {
    return this.http.post(authRoute + 'credentials/login', user , httpOptions);
  }

  register(user: {
    name: string,
    email: string,
    birthDate: string,
    login: string,
    password: string
  }): Observable<any> {
    return this.http.post(authRoute + 'user', user, httpOptions);
  }
}
