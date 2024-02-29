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
  constructor(private http: HttpClient) { }

  getCricketBet():Observable<any>{
    return this.http.get(this.apiUrl).pipe(
      catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof HttpErrorResponse) {
      // A client-side or network error occurred.
      console.error('Network error:', error.error.message);
      return throwError('Network error: Please check your internet connection.');
    } else {
      // The backend returned an unsuccessful response code.
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      return throwError('Server error: Please try again later.');
    }
  }
}
