import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let InstruccionesUsuarioService = class InstruccionesUsuarioService {
    constructor(http) {
        this.http = http;
    }
    getInstruccionesUsuario(id) {
        return this.http.get('http://localhost:3000/instrucciones/instruccionesUsuario/' + id);
    }
    /*
      getInstruccion(id: string): Observable<any> {
        return this.http.get('http://localhost:3000/instrucciones/${id}');
      }*/
    saveInstruccionUsuario(idInstruccion, idUsuario) {
        console.log('Id instruccion ' + idInstruccion);
        console.log('idusuario ' + idUsuario);
        return this.http.post('http://localhost:3000/instrucciones/instruccionUsuario/' + idInstruccion, idUsuario);
    }
    eliminarInstruccionUsuario(id) {
        return this.http.get('http://localhost:3000/instrucciones/instruccionesUsuario/' + id);
    }
};
InstruccionesUsuarioService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], InstruccionesUsuarioService);
export { InstruccionesUsuarioService };
//# sourceMappingURL=instrucciones-usuario.service.js.map