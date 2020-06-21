import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) {}

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('token');
      this.router.navigate(['/'])
    }
  }
}
