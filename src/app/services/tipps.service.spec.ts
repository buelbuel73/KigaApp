import { TestBed } from '@angular/core/testing';

import { TippsService } from './tipps.service';

describe('TippsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TippsService = TestBed.get(TippsService);
    expect(service).toBeTruthy();
  });
});
