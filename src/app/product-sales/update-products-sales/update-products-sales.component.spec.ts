import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductsSalesComponent } from './update-products-sales.component';

describe('UpdateProductsSalesComponent', () => {
  let component: UpdateProductsSalesComponent;
  let fixture: ComponentFixture<UpdateProductsSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProductsSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateProductsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
