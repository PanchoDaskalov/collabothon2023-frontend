import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MifiDialogComponent } from './mifi-dialog.component';

describe('MifiDialogComponent', () => {
  let component: MifiDialogComponent;
  let fixture: ComponentFixture<MifiDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MifiDialogComponent]
    });
    fixture = TestBed.createComponent(MifiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
