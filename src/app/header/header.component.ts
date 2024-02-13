import { Component } from '@angular/core';
import { SliderComponent } from '../components/slider/slider.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
