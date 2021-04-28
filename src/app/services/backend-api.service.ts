import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type ActivityType = {
  name: string;
  distanceVeryHigh: number;
  distanceHigh: number;
  distanceModerate: number;
  distanceLow: number;
  notAllowedAt: string;
};
type ActivityReturn = {
  data: {
    name: string,
    distanceVeryHigh: number,
    distanceHigh: number,
    distanceModerate: number,
    distanceLow: number,
    notAllowedAt: string,
    createdAt: string,
    updatedAt: string | null,
    deletedAt: string | null,
    id: string
  },
  success: boolean,
  errors: []
};
type ActivityCreated = {

  data: {
    name: string,
    distanceVeryHigh: number,
    distanceHigh: number,
    distanceModerate: number,
    distanceLow: number,
    notAllowedAt: string,
    createdAt: string,
    updatedAt: string|null,
    deletedAt: string|null,
    id: string
  };
  success: boolean;
  errors: [];
};

type CredentialsLogin = {
  login: string;
  password: string;
};

type Hall = {
  name: string;
  width: number;
  length: number;
  activityId: string;
  userId: string;
};

type Calculate = {
  width: number;
  length: number;
  activityId: string;
  currentLevel: string;
};

type User = {
  name: string;
  email: string;
  birthDate: string;
  login: string;
  password: string;
};


@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  private apiServer = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  // activity handler
  public createActivity(activity: ActivityType ): Observable<any>{
    return  this.http.post(this.apiServer + 'Activity', activity);
  }
  public updateActivity(activity: {}): Observable<any>{
    return  this.http.put(this.apiServer + 'Activity', activity);
  }
  public deleteActivity(activityId: string): Observable<any>{
    return  this.http.delete(this.apiServer + 'Activity/' + activityId);
  }
  public getActivity(query: {}): Observable<any>{
    return this.http.get(this.apiServer + 'Activity/List');
  }

  // credentials handler
  public login(login: {login: string, password: string} ): Observable<any>{
    return  this.http.post(this.apiServer + 'Credentials/Login', login);
  }

  // hall handler
  public createHall(hall: {}): Observable<any>{
    return this.http.post(this.apiServer + 'Hall', hall);
  }
  public updateHall(hall: {}): Observable<any>{
    return this.http.put(this.apiServer + 'Hall', hall);
  }
  public calculateDistance(hallNumbers: {}): Observable<any>{
    return this.http.post(this.apiServer + 'Hall/CalculateDistance', hallNumbers);
  }
  public getHall(hall: {}): Observable<any>{
    return this.http.get(this.apiServer + 'Hall/List');
  }
  public removeHall(hallId: string): Observable<any>{
    return this.http.delete(this.apiServer + 'Hall/' + hallId);
  }

  // user handler
  public createUser(user: {}): Observable<any>{
    return this.http.post(this.apiServer + 'User', user);
  }
  public updateUser(user: {}): Observable<any>{
    return this.http.put(this.apiServer + 'User', user);
  }
  public getUser(userId: {}): Observable<any>{
    return this.http.get(this.apiServer + 'User/' + userId);
  }
  public deleteUser(userId: {}): Observable<any>{
    return this.http.delete(this.apiServer + 'User/' + userId);
  }
  public getAllUsers(): Observable<any>{
    return this.http.delete(this.apiServer + 'User/List');
  }
}
