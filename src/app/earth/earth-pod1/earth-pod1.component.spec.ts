import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthPod1Component } from './earth-pod1.component';

describe('EarthPod1Component', () => {
  let component: EarthPod1Component;
  let fixture: ComponentFixture<EarthPod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthPod1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthPod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
