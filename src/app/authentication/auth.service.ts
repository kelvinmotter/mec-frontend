import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = true;

  constructor(private router: Router){

  }

  login(username: string, password: string): void {
    console.log(username, password)
    this.isAuthenticated = username === 'admin' && password === 'admin' ? true : false;
    console.log(this.isAuthenticated)
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
