import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveBankStatementComponent } from './add-remove-bank-statement.component';

describe('AddRemoveBankStatementComponent', () => {
  let component: AddRemoveBankStatementComponent;
  let fixture: ComponentFixture<AddRemoveBankStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveBankStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRemoveBankStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
