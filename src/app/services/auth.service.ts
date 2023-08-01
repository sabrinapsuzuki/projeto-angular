import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
   
  }

  login(userData: any){
   const url = `${this.apiUrl}/auth/login`;
   return this.http.post(url, userData)
  }
}
