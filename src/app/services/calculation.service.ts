import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

// commons
const hallRoute = 'https://localhost:5001/Hall/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' })
};


@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient) { }

  addHall(hall: any): Observable<any>{
    return this.http.post(hallRoute + 'CalculateDistance', hall , httpOptions);
  }
}
