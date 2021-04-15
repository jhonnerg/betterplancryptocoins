import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCoinsComponent } from './detail-coins.component';

describe('DetailCoinsComponent', () => {
  let component: DetailCoinsComponent;
  let fixture: ComponentFixture<DetailCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
