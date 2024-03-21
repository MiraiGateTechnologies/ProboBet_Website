import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BetPlace } from '../interface/placeBetPosition.interface';

@Injectable({
  providedIn: 'root'
})
export class PlaceBetPositionService {

  constructor(private http:HttpClient) { }

  placeBetPosition(data:any):Observable<BetPlace>{
    let url='https://api.betguru.net/game/sessionBetPost';
    return this.http.post<BetPlace>(url,data);
  }
}
