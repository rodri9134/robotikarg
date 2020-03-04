import { TestBed } from '@angular/core/testing';

import { LenguajesService } from './lenguajes.service';

describe('LenguajesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LenguajesService = TestBed.get(LenguajesService);
    expect(service).toBeTruthy();
  });
});
