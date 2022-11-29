import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExodataPod2Component } from './exodata-pod2.component';

describe('ExodataPod2Component', () => {
  let component: ExodataPod2Component;
  let fixture: ComponentFixture<ExodataPod2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExodataPod2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExodataPod2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
