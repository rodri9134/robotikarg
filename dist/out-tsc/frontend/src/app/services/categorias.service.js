import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CategoriasService = class CategoriasService {
    constructor(http) {
        this.http = http;
    }
    getCategorias() {
        return this.http.get('http://localhost:3000/categorias');
    }
    getCategoria(id) {
        return this.http.get('http://localhost:3000/categorias/' + id);
    }
    saveCategorias(categoria) {
        console.log(categoria);
        return this.http.post('http://localhost:3000/categorias', categoria);
    }
    deleteCategorias(id) {
        return this.http.delete('http://localhost:3000/categorias/' + id);
    }
    updateCategorias(id, categoria) {
        return this.http.put('http://localhost:3000/categorias/', categoria);
    }
};
CategoriasService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CategoriasService);
export { CategoriasService };
//# sourceMappingURL=categorias.service.js.map