import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExodataPod1Component } from './exodata-pod1.component';

describe('ExodataPod1Component', () => {
  let component: ExodataPod1Component;
  let fixture: ComponentFixture<ExodataPod1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExodataPod1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExodataPod1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
