import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.API_URL;
  private isAuthenticated: boolean = false;
  private loggedInUser: any = null;

  constructor(private http: HttpClient) {}

  login(userData: any) {
    const url = `${this.apiUrl}/auth/login`;
    return this.http.post(url, userData).pipe(
      tap((user: any) => {
        this.isAuthenticated = true;
        this.loggedInUser = user;
      })
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.loggedInUser = null;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
}
