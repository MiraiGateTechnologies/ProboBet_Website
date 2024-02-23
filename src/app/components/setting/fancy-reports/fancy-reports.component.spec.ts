import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyReportsComponent } from './fancy-reports.component';

describe('FancyReportsComponent', () => {
  let component: FancyReportsComponent;
  let fixture: ComponentFixture<FancyReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FancyReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
