import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let InstruccionesService = class InstruccionesService {
    constructor(http) {
        this.http = http;
    }
    getInstrucciones() {
        return this.http.get('http://localhost:3000/instrucciones');
    }
    getInstruccionesLenguaje(id) {
        console.log('id ' + id);
        return this.http.get('http://localhost:3000/instrucciones/' + id);
    }
    saveInstruccion(instruccion) {
        console.log(instruccion);
        return this.http.post('http://localhost:3000/instrucciones/', instruccion);
    }
    deleteInstruccion(id) {
        console.log('Id a eliminar: ' + id);
        return this.http.delete('http://localhost:3000/instrucciones/' + id);
    }
    updateInstruccion(id, instruccion) {
        return this.http.put('http://localhost:3000/instrucciones/' + id, instruccion);
    }
    /*
    getInstruccionesUsuario(id: string): Observable<any> {
      return this.http.get('http://localhost:3000/instrucciones/instruccionesUsuario/'+id);
    }*/
    getInstruccion(id) {
        return this.http.get('http://localhost:3000/instrucciones/leerInstrucion/' + id);
    }
    guardarInstruccionUsuario(idInstruccion, idUsuario) {
        return this.http.post('http://localhost:3000/instrucciones/guardarInstrucciones/' + idInstruccion, idUsuario);
    }
};
InstruccionesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InstruccionesService);
export { InstruccionesService };
//# sourceMappingURL=instrucciones.service.js.map