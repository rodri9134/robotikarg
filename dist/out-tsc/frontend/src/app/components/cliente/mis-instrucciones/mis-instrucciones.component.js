import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MisInstruccionesComponent = class MisInstruccionesComponent {
    constructor(router, instruccionesUsuarioService) {
        this.router = router;
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
    nomegusta(idInstruccionUsuario) {
        console.log('Id Instruccion: ', idInstruccionUsuario);
        this.instruccionesUsuarioService.eliminarInstruccionUsuario(idInstruccionUsuario).subscribe(res => {
            console.log(res);
            this.instrucciones = res;
            this.router.navigate(['/mInstrucciones']);
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