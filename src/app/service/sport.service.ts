import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sports } from '../interface/sport.interface';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private url = 'https://api.1exch.net/game/inPlay';
//   token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTk0NDAiLCJhdWQiOiIyIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiIyIn1dLCJpc3MiOiJJU1NVRVIiLCJpYXQiOjE3MDc5MTYwMjUsImV4cCI6MTcwODc4MDAyNX0.b1yv-b8xb_otk1K4dI9q_UbkPCfOf75esUBnl_gWcXI';
//   headers = {
//    'Authorization': this.token
//  };

  constructor(private http:HttpClient) { }


  getSportDetails(matchcode:any):Observable<any>{
    const url = `https://odds.betguru.net/api/v2/get/${matchcode}`;
    return this.http.get(url)
  }
}
