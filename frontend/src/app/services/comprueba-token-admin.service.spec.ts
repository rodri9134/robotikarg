import { TestBed } from '@angular/core/testing';

import { CompruebaTokenAdminService } from './comprueba-token-admin.service';

describe('CompruebaTokenAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompruebaTokenAdminService = TestBed.get(CompruebaTokenAdminService);
    expect(service).toBeTruthy();
  });
});
