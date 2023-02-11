import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLogged = false;
  constructor() { }
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged)
      }, 1500);
    })
    return promise;
  }
  logIn() {
    this.isLogged = true;
  }
  logOut() {
    this.isLogged = false;
  }
}
