import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoReportsComponent } from './casino-reports.component';

describe('CasinoReportsComponent', () => {
  let component: CasinoReportsComponent;
  let fixture: ComponentFixture<CasinoReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasinoReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasinoReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
