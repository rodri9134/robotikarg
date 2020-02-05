import { TestBed } from '@angular/core/testing';

import { TorneosService } from './torneos.service';

describe('TorneosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TorneosService = TestBed.get(TorneosService);
    expect(service).toBeTruthy();
  });
});
