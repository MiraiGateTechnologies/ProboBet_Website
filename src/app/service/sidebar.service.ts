import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  private sidebarVisible = new BehaviorSubject<boolean>(false);
  public sidebarVisible$ = this.sidebarVisible.asObservable();

  constructor() { }

  toggleSidebar() {
    this.sidebarVisible.next(!this.sidebarVisible.value);
  }
  closeSidebar(): void {
    this.sidebarVisible.next(false);
  }
  openSidebar(): void {
    this.sidebarVisible.next(true);
  }
  hide() {
    this.sidebarVisible.next(false); // Assuming sidebarVisible is the BehaviorSubject managing visibility
  }
}
