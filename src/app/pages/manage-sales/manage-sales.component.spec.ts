import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSalesComponent } from './manage-sales.component';

describe('ManageSalesComponent', () => {
  let component: ManageSalesComponent;
  let fixture: ComponentFixture<ManageSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSalesComponent]
    });
    fixture = TestBed.createComponent(ManageSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
