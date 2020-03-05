import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CompruebaTokenAdminService = class CompruebaTokenAdminService {
    constructor(usuariosservice) {
        this.usuariosservice = usuariosservice;
    }
    intercept(req, next) {
        const token1 = req.clone({
            setHeaders: {
                Autorization: 'Admin' + this.usuariosservice.getAdminToken()
            }
        });
        return next.handle(token1);
    }
};
CompruebaTokenAdminService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompruebaTokenAdminService);
export { CompruebaTokenAdminService };
//# sourceMappingURL=comprueba-token-admin.service.js.map