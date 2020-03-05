import { TestBed, inject } from '@angular/core/testing';
import { GuardaLoginUserGuard } from './guarda-login-user.guard';
describe('GuardaLoginUserGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GuardaLoginUserGuard]
        });
    });
    it('should ...', inject([GuardaLoginUserGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=guarda-login-user.guard.spec.js.map