import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExodataPod3Component } from './exodata-pod3.component';

describe('ExodataPod3Component', () => {
  let component: ExodataPod3Component;
  let fixture: ComponentFixture<ExodataPod3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExodataPod3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExodataPod3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
