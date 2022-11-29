import { TestBed } from '@angular/core/testing';

import { NasaapingService } from './nasaaping.service';

describe('NasaapingService', () => {
  let service: NasaapingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaapingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
