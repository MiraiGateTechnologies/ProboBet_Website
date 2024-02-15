import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sports } from '../interface/sport.interface';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private url = 'https://api.1exch.net/game/inPlay';
  token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTk0NDAiLCJhdWQiOiIyIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiIyIn1dLCJpc3MiOiJJU1NVRVIiLCJpYXQiOjE3MDc5MTYwMjUsImV4cCI6MTcwODc4MDAyNX0.b1yv-b8xb_otk1K4dI9q_UbkPCfOf75esUBnl_gWcXI';
  headers = {
   'Authorization': this.token
 };

  constructor(private http:HttpClient) { }
  // getSport():Observable<Sports>{
  //   return this.http.get<Sports>(this.url,{headers:new HttpHeaders({
  //     'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTk0NDAiLCJhdWQiOiIyIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiIyIn1dLCJpc3MiOiJJU1NVRVIiLCJpYXQiOjE3MDcyODE0MjQsImV4cCI6MTcwODE0NTQyNH0.wvXXBUJ9NCPiBFdqJzKaR3oEs8eDI5vjFFju-VWK9q4'
  //       })}
  //     );
  // }

  getSportDetails(matchcode:any):Observable<any>{
    const url = `https://odds.betguru.net/api/v2/get/${matchcode}`;
    return this.http.get(url,{headers:this.headers})
  }
}
