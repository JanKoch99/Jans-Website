import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeukemiaComponent } from './leukemia.component';

describe('LeukemiaComponent', () => {
  let component: LeukemiaComponent;
  let fixture: ComponentFixture<LeukemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeukemiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeukemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
