import { TestBed } from '@angular/core/testing';

import { AngeboteService } from './angebote.service';

describe('AngeboteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngeboteService = TestBed.get(AngeboteService);
    expect(service).toBeTruthy();
  });
});
