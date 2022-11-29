import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsPod3Component } from './mars-pod3.component';

describe('MarsPod3Component', () => {
  let component: MarsPod3Component;
  let fixture: ComponentFixture<MarsPod3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsPod3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsPod3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
