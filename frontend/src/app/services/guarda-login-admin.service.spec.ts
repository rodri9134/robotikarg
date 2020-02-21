import { TestBed } from '@angular/core/testing';

import { GuardaLoginAdminService } from './guarda-login-admin.service';

describe('GuardaLoginAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardaLoginAdminService = TestBed.get(GuardaLoginAdminService);
    expect(service).toBeTruthy();
  });
});
