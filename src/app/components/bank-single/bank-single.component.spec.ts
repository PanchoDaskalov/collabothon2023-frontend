import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSingleComponent } from './bank-single.component';

describe('BankSingleComponent', () => {
  let component: BankSingleComponent;
  let fixture: ComponentFixture<BankSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankSingleComponent]
    });
    fixture = TestBed.createComponent(BankSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
