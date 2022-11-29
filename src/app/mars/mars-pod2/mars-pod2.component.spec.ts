import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsPod2Component } from './mars-pod2.component';

describe('MarsPod2Component', () => {
  let component: MarsPod2Component;
  let fixture: ComponentFixture<MarsPod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsPod2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsPod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
