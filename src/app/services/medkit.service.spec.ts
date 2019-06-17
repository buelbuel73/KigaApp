import { TestBed } from '@angular/core/testing';

import { MedkitService } from './medkit.service';

describe('MedkitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedkitService = TestBed.get(MedkitService);
    expect(service).toBeTruthy();
  });
});
