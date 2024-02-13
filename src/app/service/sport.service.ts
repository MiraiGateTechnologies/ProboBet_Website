import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sports } from '../interface/sport.interface';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private url = 'https://api.1exch.net/game/inPlay';

  constructor(private http:HttpClient) { }
  getSport():Observable<Sports>{
    return this.http.get<Sports>(this.url,{headers:new HttpHeaders({
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTk0NDAiLCJhdWQiOiIyIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiIyIn1dLCJpc3MiOiJJU1NVRVIiLCJpYXQiOjE3MDcyODE0MjQsImV4cCI6MTcwODE0NTQyNH0.wvXXBUJ9NCPiBFdqJzKaR3oEs8eDI5vjFFju-VWK9q4'
        })}
      );
  }
}
