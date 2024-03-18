import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  private _sidebarStatus = new BehaviorSubject<boolean>(false);
  public sidebarStatus$ = this._sidebarStatus.asObservable();

  constructor() { }

  toggleSidebar() {
    this._sidebarStatus.next(!this._sidebarStatus.value);
  }
}
