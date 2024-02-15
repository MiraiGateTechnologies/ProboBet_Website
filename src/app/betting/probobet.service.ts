import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { liveCricketMatch, TeamBet } from '../in-play/inpaly.interface';

@Injectable({
  providedIn: 'root'
})
export class ProbobetService {
  private jsonUrl = '/src/assets/JSON/cricket-bet.json';
  cricketData = []
   apiUrl = 'https://api.betguru.net/game/inPlay';
   token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTk0NDAiLCJhdWQiOiIyIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiIyIn1dLCJpc3MiOiJJU1NVRVIiLCJpYXQiOjE3MDc5MTYwMjUsImV4cCI6MTcwODc4MDAyNX0.b1yv-b8xb_otk1K4dI9q_UbkPCfOf75esUBnl_gWcXI';
   headers = {
    'Authorization': this.token
  };
  constructor(private http: HttpClient) { }

  getCricketBet():Observable<any>{
    return this.http.get(this.apiUrl,{headers:this.headers}).pipe(
      catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
