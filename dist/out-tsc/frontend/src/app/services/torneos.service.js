import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TorneosService = class TorneosService {
    constructor(http) {
        this.http = http;
    }
    getTorneos() {
        return this.http.get('http://localhost:3000/torneos');
    }
    getTorneo(id) {
        return this.http.get('http://localhost:3000/torneos/${id}');
    }
    saveTorneo(torneo) {
        console.log(torneo);
        return this.http.post('http://localhost:3000/torneos', torneo);
    }
    deleteTorneo(id) {
        return this.http.delete('http://localhost:3000/torneos/${id}');
    }
    updateTorneo(id, torneo) {
        return this.http.put('http://localhost:3000/torneos/${id}', torneo);
    }
};
TorneosService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TorneosService);
export { TorneosService };
//# sourceMappingURL=torneos.service.js.map