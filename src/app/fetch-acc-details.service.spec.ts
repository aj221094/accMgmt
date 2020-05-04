import { TestBed } from '@angular/core/testing';

import { FetchAccDetailsService } from './fetch-acc-details.service';

describe('FetchAccDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchAccDetailsService = TestBed.get(FetchAccDetailsService);
    expect(service).toBeTruthy();
  });
});
