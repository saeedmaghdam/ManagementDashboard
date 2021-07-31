import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddUpdateFormComponent } from './product-add-update-form.component';

describe('ProductAddUpdateFormComponent', () => {
  let component: ProductAddUpdateFormComponent;
  let fixture: ComponentFixture<ProductAddUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
