import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExodataComponent } from './exodata.component';

describe('ExodataComponent', () => {
  let component: ExodataComponent;
  let fixture: ComponentFixture<ExodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExodataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
