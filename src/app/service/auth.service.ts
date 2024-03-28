import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { catchError, map, Observable, throwError } from 'rxjs';
import { LoginResponse, User } from '../interface/login.interface';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  TOKEN_KEY:any;
  private url ='https://api.1exch.net/login';
  constructor(private http:HttpClient,private router:Router) { }

  login(data: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, data).pipe(
      map((response) => {
        console.log(response);
        let token = response.data.jwt.accessToken;
        sessionStorage.setItem('token', token);
        return response;
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return throwError(error);
      })
    );
}

  getToken(): string | null {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('token');
    }
    return null;
  }
  // isTokenExpired(): any {
  //   const token = this.getToken();
  //   if (!token) return this.router.navigate(['/login']);
  //   try {
  //     const decoded: any = jwt_decode(token);
  //     const currentTime = Math.floor(new Date().getTime() / 1000);
  //     return decoded.exp < currentTime;
  //   } catch (error) {
  //     console.error('Failed to decode token', error);
  //     return true;
  //   }
  // }

   logOut() {
     sessionStorage.removeItem('token')
    this.router.navigate(['/login']);
    throw new Error('Method not implemented.');
  }

}
