import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CompruebaTokenService = class CompruebaTokenService {
    constructor(usuariosservice) {
        this.usuariosservice = usuariosservice;
    }
    intercept(req, next) {
        const token1 = req.clone({
            setHeaders: {
                Autorization: 'Robotikarg' + this.usuariosservice.getToken()
            }
        });
        return next.handle(token1);
    }
};
CompruebaTokenService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CompruebaTokenService);
export { CompruebaTokenService };
//# sourceMappingURL=comprueba-token.service.js.map