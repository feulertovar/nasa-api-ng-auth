import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthPod3Component } from './earth-pod3.component';

describe('EarthPod3Component', () => {
  let component: EarthPod3Component;
  let fixture: ComponentFixture<EarthPod3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthPod3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthPod3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
