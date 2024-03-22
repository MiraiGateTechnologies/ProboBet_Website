import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(private http:HttpClient) { }
  changePassword():Observable<any>{
  const url = 'https://api.betguru.net/dash/changePassword';
    return this.http.get(url)
  }
}
