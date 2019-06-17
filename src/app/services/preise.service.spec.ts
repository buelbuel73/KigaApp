import { TestBed } from '@angular/core/testing';

import { PreiseService } from './preise.service';

describe('PreiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreiseService = TestBed.get(PreiseService);
    expect(service).toBeTruthy();
  });
});
