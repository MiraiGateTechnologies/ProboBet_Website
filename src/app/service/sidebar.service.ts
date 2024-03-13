import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public sidebarOpen$: Observable<boolean> = this.sidebarOpenSubject.asObservable();

  constructor() {}

  toggleSidebar() {
    this.sidebarOpenSubject.next(!this.sidebarOpenSubject.value);
    const newValue = !this.sidebarOpenSubject.value;
    console.log('New value for sidebarOpenSubject:', newValue);
    this.sidebarOpenSubject.next(newValue);
  }
}
