import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../assets/environments/environments';
import { AccountDetails } from '../components/setting/accounts-statement/account-statement.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAccountDetails(page:number): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(`${this.baseUrl}/game/ledger/${page}`);
  }

}
