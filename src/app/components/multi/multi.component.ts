import { Component } from '@angular/core';
import { ActorsComponent } from '../actors/actors.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-multi',
  standalone: true,
  imports: [ActorsComponent,FooterComponent],
  templateUrl: './multi.component.html',
  styleUrl: './multi.component.css'
})
export class MultiComponent {

}
