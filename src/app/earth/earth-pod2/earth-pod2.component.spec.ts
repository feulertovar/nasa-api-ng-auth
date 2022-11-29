import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthPod2Component } from './earth-pod2.component';

describe('EarthPod2Component', () => {
  let component: EarthPod2Component;
  let fixture: ComponentFixture<EarthPod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthPod2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthPod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
