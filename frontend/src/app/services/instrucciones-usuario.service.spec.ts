import { TestBed } from '@angular/core/testing';

import { InstruccionesUsuarioService } from './instrucciones-usuario.service';

describe('InstruccionesUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstruccionesUsuarioService = TestBed.get(InstruccionesUsuarioService);
    expect(service).toBeTruthy();
  });
});
