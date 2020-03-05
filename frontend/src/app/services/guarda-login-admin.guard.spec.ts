import { TestBed, async, inject } from '@angular/core/testing';

import { GuardaLoginAdminGuard } from './guarda-login-admin.guard';

describe('GuardaLoginAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardaLoginAdminGuard]
    });
  });

  it('should ...', inject([GuardaLoginAdminGuard], (guard: GuardaLoginAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
