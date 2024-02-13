import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { liveCricketMatch, TeamBet } from '../in-play/inpaly.interface';

@Injectable({
  providedIn: 'root'
})
export class ProbobetService {
  private jsonUrl = '/src/assets/JSON/cricket-bet.json';
  cricketData = []
  constructor(private http: HttpClient) { }
  getCricketBet():Observable<TeamBet[]>{
    return this.http.get<TeamBet[]>(this.jsonUrl
    )}
}
