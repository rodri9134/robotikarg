import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TiendasService = class TiendasService {
    constructor(http) {
        this.http = http;
    }
    getTiendas2() {
        return this.http.get('http://localhost:3000/tiendas');
    }
    getTienda(id) {
        return this.http.get('http://localhost:3000/tiendas/' + id);
    }
    saveTiendas(tienda) {
        console.log(tienda);
        return this.http.post('http://localhost:3000/tiendas', tienda);
    }
    deleteTiendas(id) {
        return this.http.delete('http://localhost:3000/tiendas/' + id);
    }
    updateTiendas(id, tienda) {
        return this.http.put('http://localhost:3000/tiendas/', tienda);
    }
};
TiendasService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TiendasService);
export { TiendasService };
//# sourceMappingURL=tiendas.service.js.map