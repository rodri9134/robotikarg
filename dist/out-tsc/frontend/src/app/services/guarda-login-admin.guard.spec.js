import { TestBed, inject } from '@angular/core/testing';
import { GuardaLoginAdminGuard } from './guarda-login-admin.guard';
describe('GuardaLoginAdminGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GuardaLoginAdminGuard]
        });
    });
    it('should ...', inject([GuardaLoginAdminGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=guarda-login-admin.guard.spec.js.map