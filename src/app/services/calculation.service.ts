import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

// commons
const hallRoute = environment.API_URL + '/Hall';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' })
};


@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient) { }

  addHall(hall: any): Observable<any>{
    return this.http.post(hallRoute + '/CalculateDistance', hall , httpOptions);
  }
}
