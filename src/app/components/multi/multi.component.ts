import { Component } from '@angular/core';
import { ActorsComponent } from '../actors/actors.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi',
  standalone: true,
  imports: [ActorsComponent,FooterComponent,CommonModule],
  templateUrl: './multi.component.html',
  styleUrl: './multi.component.css'
})
export class MultiComponent {
  multiImages=['assets/multi/multi1.png','assets/multi/multi2.png','assets/multi/multi4.png','assets/multi/multi5.png','assets/multi/multi6.png','assets/multi/multi7.png','assets/multi/multi8.png','assets/multi/multi9.png','assets/multi/multi10.png','assets/multi/multi11.png']
}
