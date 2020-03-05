import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let GuardaLoginAdminGuard = class GuardaLoginAdminGuard {
    constructor(router, usuarios) {
        this.router = router;
        this.usuarios = usuarios;
    }
    canActivate() {
        if (this.usuarios.logAdminIn()) {
            return true;
        }
        this.router.navigate(['/navCli']);
        return false;
    }
};
GuardaLoginAdminGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GuardaLoginAdminGuard);
export { GuardaLoginAdminGuard };
//# sourceMappingURL=guarda-login-admin.guard.js.map