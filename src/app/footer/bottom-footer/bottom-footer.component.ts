import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SidebarToggleService } from '../../service/sidebar.service';

@Component({
  selector: 'app-bottom-footer',
  standalone: true,
  imports: [],
  templateUrl: './bottom-footer.component.html',
  styleUrl: './bottom-footer.component.css'
})
export class BottomFooterComponent implements OnInit{

  constructor(private sidebarToggleService: SidebarToggleService){}
  openSidebar() {
    this.sidebarToggleService.toggleSidebar();
  }
ngOnInit(): void {

}
}
