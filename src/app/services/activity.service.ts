import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


// commons
const activityRoute = 'https://localhost:5001/activity/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json-patch+json' })
};

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  addActivity(activity: {
    name: string,
    distanceVeryHigh: number,
    distanceHigh: number,
    distanceModerate: number,
    distanceLow: number,
    notAllowedAt: 'VeryHigh' | 'High' | 'Moderate' | 'Low'
  }): Observable<any>{
    return this.http.post(activityRoute, activity, httpOptions);
  }

  getActivityList(): Observable<any>{
    return this.http.get(activityRoute + 'list', httpOptions);
  }
}
