import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { map, Subscription, take, timer } from 'rxjs';
import { LoadingComponent } from '../../components/loading/loading.component';
import { BetPlace } from '../../interface/placeBetPosition.interface';
import { LoadingService } from '../../service/loading.service';
import { PlaceBetPositionService } from '../../service/place-bet-position.service';


@Component({
  selector: 'app-place-bets',
  standalone: true,
  imports: [CommonModule,NgbModule,LoadingComponent,FormsModule],
  templateUrl: './place-bets.component.html',
  styleUrl: './place-bets.component.css',
  providers:[LoadingService]
})
export class PlaceBetsComponent implements OnInit, OnDestroy {
  @Input() data: any; // The data passed from the parent component
  buttonAmount=[500,1000,2000,3000,5000,10000,20000,30000,50000];
  amount: any;
  isLoading:boolean=false;
   selectedAmount!: number;
  countDown: number = 6;
  private countdownInterval: any;
  errorMessage: string = '';
      constructor(public modal: NgbActiveModal,private loadingService: LoadingService,private amountBetService:PlaceBetPositionService,private toastr: ToastrService){
  }
  ngOnInit(): void {
    this.startCountdown();
  }
  selectAmount(amount: number) {
    this.selectedAmount = amount;

  }

  dismiss() {
    this.modal.dismiss('Cross click');
  }
  validateAmount(event: any): void {
    const value = event.target.value;
    if (value === '') {
      this.errorMessage = 'Amount is required';
    } else if (value < 0) {
      this.errorMessage = 'Amount cannot be negative';
    } else {
      this.errorMessage = '';
    }
    this.amount = value ? Number(value) : null;
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      // Decrease countdown by 1
      this.countDown -= 1;

      // Check if countdown has reached 0
      if (this.countDown === 0) {
        clearInterval(this.countdownInterval); // Clear interval to stop the countdown
        this.dismiss(); // Dismiss the modal
      }
    }, 1000); // Decrease every second
  }
  submit(){
    this.isLoading =true;
    if(this.errorMessage == ''){
      let data:BetPlace= {
        amount:this.selectedAmount,
        match_code:this.data.match_code,
        mode:this.data.mode,
        rate:this.data.rate,
        run:this.data.run,
        sid:this.data.sid,
        team:this.data.team,
        type:this.data.type
      }
      console.log(data)
      this.amountBetService.placeBetPosition(data).subscribe({
        next:(res)=>{
          this.toastr.success('update successfully')
          console.log(res)
        },
        error:(e)=>{
          console.log(e)
          this.toastr.error('Error',e.message, {
            timeOut: 3000,
          });
        }
      })
    }
    console.log(this.selectedAmount)
    // this.loadingService.show();

  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

}
