import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsStatementComponent } from './accounts-statement.component';

describe('AccountsStatementComponent', () => {
  let component: AccountsStatementComponent;
  let fixture: ComponentFixture<AccountsStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountsStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountsStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
