import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';
import { User } from '../interface/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  TOKEN_KEY:any;
  private url ='https://api.1exch.net/login';
  constructor(private http:HttpClient) { }

  login(code:string,password:string):Observable<User>{
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Origin': 'https://1exch.net' // Replace with your actual origin
    // });

    // const headers = { 'Authorization': 'Bearer my-tokeneyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTk0NDAiLCJhdWQiOiIyIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiIyIn1dLCJpc3MiOiJJU1NVRVIiLCJpYXQiOjE3MDcyMjIyNjEsImV4cCI6MTcwODA4NjI2MX0.w_7K27FDVnNqUt5K5i7iemeBmDEcsw9GYbQ4DDASFrs' }

    return this.http.post<User>(this.url,{code,password}).pipe(map(response=>{
     this.TOKEN_KEY = localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTk0NDAiLCJhdWQiOiIyIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiIyIn1dLCJpc3MiOiJJU1NVRVIiLCJpYXQiOjE3MDgwNjAyMTksImV4cCI6MTcwODkyNDIxOX0.Wtu4cBYPZN6Mqnl1qwxvMagE9WRgojCO2XplqV9iOlU');
      return response;
    }))
  }
  getToken(): string | null {
    return this.TOKEN_KEY;
  }
}
