import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LenguajesService = class LenguajesService {
    constructor(http) {
        this.http = http;
    }
    getLenguajes() {
        return this.http.get('http://localhost:3000/lenguajes');
    }
    getLenguaje(id) {
        return this.http.get('http://localhost:3000/lenguajes/${id}');
    }
    saveLenguaje(lenguaje) {
        console.log(lenguaje);
        return this.http.post('http://localhost:3000/lenguajes', lenguaje);
    }
    deleteLenguaje(id) {
        return this.http.delete('http://localhost:3000/lenguajes/${id}');
    }
    updateLenguaje(id, lenguaje) {
        return this.http.put('http://localhost:3000/lenguajes/${id}', lenguaje);
    }
};
LenguajesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LenguajesService);
export { LenguajesService };
//# sourceMappingURL=lenguajes.service.js.map