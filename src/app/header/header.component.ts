import { Component } from '@angular/core';
import { SliderComponent } from '../components/slider/slider.component';
import { TopHeaderComponent } from '../top-header/top-header.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopHeaderComponent,SliderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent{

}
