import { TestBed } from '@angular/core/testing';

import { AnfrageService } from './anfrage.service';

describe('AnfrageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnfrageService = TestBed.get(AnfrageService);
    expect(service).toBeTruthy();
  });
});
