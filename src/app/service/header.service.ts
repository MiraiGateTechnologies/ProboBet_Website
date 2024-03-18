import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../interface/headerUserData.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http:HttpClient) { }

  getDataOfUser():Observable<UserData>{
    let url='https://api.betguru.net/dash/index';
    return this.http.get<UserData>(url);
  }
}
