import { Component } from '@angular/core';
import { BottomFooterComponent } from './bottom-footer/bottom-footer.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BottomFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
