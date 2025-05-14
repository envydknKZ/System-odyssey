import { TestBed } from '@angular/core/testing';

import { SolarSystemDataService } from './solar-system-data.service';

describe('SolarSystemDataService', () => {
  let service: SolarSystemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarSystemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
