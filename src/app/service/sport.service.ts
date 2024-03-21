
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../assets/environments/environments';
import { Sports } from '../interface/sport.interface';
import { MatchData } from '../interface/sportdetails.interface';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  private url = 'https://api.1exch.net/game/inPlay';
  private baseUrl = environment.oddApiUrl;
  private oddBaseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }
  getSportDetails(matchcode:string):Observable<any>{
    const url = `${this.baseUrl}/api/v2/get/${matchcode}`;
    return this.http.get(url)
  }
  getPlaceCricketDetails(matchcode:string):Observable<MatchData>{
    const url = `${this.oddBaseUrl}/game/cricket/${matchcode}`
    return this.http.get<MatchData>(url);
  }
  getplusMinuData(matchcode:string):Observable<MatchData>{
    const url =`${this.baseUrl}/game/cricket/${matchcode}`;
    return this.http.get<MatchData>(url);

  }
}
