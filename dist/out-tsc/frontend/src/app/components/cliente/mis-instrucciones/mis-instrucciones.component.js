import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MisInstruccionesComponent = class MisInstruccionesComponent {
    constructor(instruccionesUsuarioService) {
        this.instruccionesUsuarioService = instruccionesUsuarioService;
    }
    ngOnInit() {
        const idUsuario = localStorage.getItem('idUsuario');
        this.instruccionesUsuarioService.getInstruccionesUsuario(idUsuario).subscribe(res => {
            console.log(res);
            this.instrucciones = res;
        }, err => {
            console.log(err);
        });
    }
    nomegusta(idInstruccion) {
        console.log('Id Instruccion: ', idInstruccion);
        this.instruccionesUsuarioService.eliminarInstruccionUsuario(idInstruccion).subscribe(res => {
            console.log(res);
            this.instrucciones = res;
        }, err => {
            console.log(err);
        });
    }
};
MisInstruccionesComponent = __decorate([
    Component({
        selector: 'app-mis-instrucciones',
        templateUrl: './mis-instrucciones.component.html',
        styleUrls: ['./mis-instrucciones.component.scss']
    })
], MisInstruccionesComponent);
export { MisInstruccionesComponent };
//# sourceMappingURL=mis-instrucciones.component.js.map