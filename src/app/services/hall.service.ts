import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

// commons
const hallRoute = environment.API_URL + '/hall';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' })
};

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor(private http: HttpClient) { }

  addHall(hall: {name: string, width: number, length: number, activityId: string}): Observable<any>{
    return this.http.post(hallRoute, hall , httpOptions);
  }

}
