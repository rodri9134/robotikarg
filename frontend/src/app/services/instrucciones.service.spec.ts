import { TestBed } from '@angular/core/testing';

import { InstruccionesService } from './instrucciones.service';

describe('InstruccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstruccionesService = TestBed.get(InstruccionesService);
    expect(service).toBeTruthy();
  });
});
