import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let GuardaLoginUserGuard = class GuardaLoginUserGuard {
    constructor(router, usuarios) {
        this.router = router;
        this.usuarios = usuarios;
    }
    canActivate() {
        if (this.usuarios.logIn()) {
            return true;
        }
        this.router.navigate(['/navCli']);
        return false;
    }
};
GuardaLoginUserGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GuardaLoginUserGuard);
export { GuardaLoginUserGuard };
//# sourceMappingURL=guarda-login-user.guard.js.map