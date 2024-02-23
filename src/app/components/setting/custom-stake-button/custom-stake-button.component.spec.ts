import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStakeButtonComponent } from './custom-stake-button.component';

describe('CustomStakeButtonComponent', () => {
  let component: CustomStakeButtonComponent;
  let fixture: ComponentFixture<CustomStakeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomStakeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomStakeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
