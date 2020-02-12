import { TestBed, async, inject } from '@angular/core/testing';

import { GuardaLoginUserGuard } from './guarda-login-user.guard';

describe('GuardaLoginUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardaLoginUserGuard]
    });
  });

  it('should ...', inject([GuardaLoginUserGuard], (guard: GuardaLoginUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
