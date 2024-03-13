import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-bottom-footer',
  standalone: true,
  imports: [],
  templateUrl: './bottom-footer.component.html',
  styleUrl: './bottom-footer.component.css'
})
export class BottomFooterComponent implements OnInit{

constructor(private sidebarSerive:SidebarService){}
ngOnInit(): void {

}
toggleButton() {
  console.log(  this.sidebarSerive.toggleSidebar())
  this.sidebarSerive.toggleSidebar();
}

}
