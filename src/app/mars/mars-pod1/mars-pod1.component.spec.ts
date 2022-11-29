import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsPod1Component } from './mars-pod1.component';

describe('MarsPod1Component', () => {
  let component: MarsPod1Component;
  let fixture: ComponentFixture<MarsPod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsPod1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsPod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
