import { Injectable } from '@angular/core';

// commons
const userStorage = 'user-metadata';
const tokenStorage = 'auth-metadata';

type userRegistered = {
  name: string,
  email: string,
  birthDate: string,
  createdAt: string,
  updatedAt: string | null,
  deletedAt: string | null,
  id: string
};

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public signOut(): void{
    window.sessionStorage.clear();
  }

  public setToken(token: string): void{
    // clear old token
    window.sessionStorage.removeItem(tokenStorage);

    // new token
    window.sessionStorage.setItem(tokenStorage, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(tokenStorage);
  }

  public setUser(user: userRegistered): void {
    // clear old session
    window.sessionStorage.removeItem(userStorage);

    // in with the new data
    window.sessionStorage.setItem(userStorage, JSON.stringify(user));
  }

  public getUser(): userRegistered | {} {
    const user = window.sessionStorage.getItem(userStorage);

    // se tiver setado, retorne o usuário
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
