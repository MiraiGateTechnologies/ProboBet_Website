import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  isLoading = false;
  private loadingSubscription!: Subscription;
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingSubscription = this.loadingService.loading$.subscribe(
     {next:(loading:any) => {
        this.isLoading = loading;
      }
     });
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
