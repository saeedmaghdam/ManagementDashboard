import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTableActionComponent } from './product-table-action.component';

describe('ProductTableActionComponent', () => {
  let component: ProductTableActionComponent;
  let fixture: ComponentFixture<ProductTableActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTableActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTableActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
