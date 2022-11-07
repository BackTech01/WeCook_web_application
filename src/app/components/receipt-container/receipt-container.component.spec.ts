import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptContainerComponent } from './receipt-container.component';

describe('ReceiptContainerComponent', () => {
  let component: ReceiptContainerComponent;
  let fixture: ComponentFixture<ReceiptContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
