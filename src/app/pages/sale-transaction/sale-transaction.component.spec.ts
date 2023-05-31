import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTransactionComponent } from './sale-transaction.component';

describe('SaleTransactionComponent', () => {
  let component: SaleTransactionComponent;
  let fixture: ComponentFixture<SaleTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleTransactionComponent]
    });
    fixture = TestBed.createComponent(SaleTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
