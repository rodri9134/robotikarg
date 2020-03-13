import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let InstruccionesUsuarioService = class InstruccionesUsuarioService {
    constructor(http) {
        this.http = http;
    }
    getInstruccionesUsuario(id) {
        return this.http.get('http://localhost:3000/instruccionesUsuario/' + id);
    }
    /*
      getInstruccion(id: string): Observable<any> {
        return this.http.get('http://localhost:3000/instrucciones/${id}');
      }*/
    saveInstruccionUsuario(instruccionUsuario) {
        return this.http.post('http://localhost:3000/instruccionesUsuario', instruccionUsuario);
    }
    eliminarInstruccionUsuario(id) {
        return this.http.get('http://localhost:3000/instruccionesUsuario/eliminarInstruccionUsuario/' + id);
    }
};
InstruccionesUsuarioService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InstruccionesUsuarioService);
export { InstruccionesUsuarioService };
//# sourceMappingURL=instrucciones-usuario.service.js.map