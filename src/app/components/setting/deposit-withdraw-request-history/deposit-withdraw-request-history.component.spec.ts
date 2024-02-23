import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositWithdrawRequestHistoryComponent } from './deposit-withdraw-request-history.component';

describe('DepositWithdrawRequestHistoryComponent', () => {
  let component: DepositWithdrawRequestHistoryComponent;
  let fixture: ComponentFixture<DepositWithdrawRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositWithdrawRequestHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepositWithdrawRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
