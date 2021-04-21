import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCarComponent } from './store-car.component';

describe('StoreCarComponent', () => {
  let component: StoreCarComponent;
  let fixture: ComponentFixture<StoreCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
