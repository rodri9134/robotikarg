import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ArticulosService = class ArticulosService {
    constructor(http) {
        this.http = http;
    }
    getArticulos() {
        return this.http.get('http://localhost:3000/articulos');
    }
    getArticulo(id) {
        return this.http.get('http://localhost:3000/articulos/${id}');
    }
    saveArticulo(articulo) {
        console.log(articulo);
        return this.http.post('http://localhost:3000/articulos', articulo);
    }
    deleteArticulo(id) {
        return this.http.delete('http://localhost:3000/articulos/${id}');
    }
    updateArticulo(id, articulo) {
        return this.http.put('http://localhost:3000/articulos/${id}', articulo);
    }
};
ArticulosService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ArticulosService);
export { ArticulosService };
//# sourceMappingURL=articulos.service.js.map