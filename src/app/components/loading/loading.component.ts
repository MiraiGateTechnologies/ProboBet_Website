import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
  providers:[LoadingService]
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false;
  private subscription: Subscription;
  constructor(private loadingService: LoadingService) {
    this.subscription = this.loadingService.isLoading$.subscribe(
      (isLoading) => {
        console.log('this si is loading',isLoading)
        this.isLoading = isLoading;
      }
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
