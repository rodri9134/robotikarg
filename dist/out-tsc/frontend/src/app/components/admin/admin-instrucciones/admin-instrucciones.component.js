import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminInstruccionesComponent = class AdminInstruccionesComponent {
    // tslint:disable-next-line: max-line-length
    constructor(lenguajesService, router, instruccionesService, instruccionesUsuarioService) {
        this.lenguajesService = lenguajesService;
        this.router = router;
        this.instruccionesService = instruccionesService;
        this.instruccionesUsuarioService = instruccionesUsuarioService;
    }
    ngOnInit() {
        this.lenguajesService.getLenguajes().subscribe(res => {
            console.log(res);
            this.lenguajes = res;
        }, err => {
            console.log(err);
        });
        this.instruccionesService.getInstrucciones().subscribe(res => {
            console.log(res);
            this.instrucciones = res;
        }, err => {
            console.log(err);
        });
    }
    muestraInstrucciones(id) {
        this.instruccionesService.getInstruccionesLenguaje(id).subscribe(res => {
            console.log(res);
            this.instrucciones = res;
        }, err => {
            console.log(err);
        });
    }
    editar(idInstruccion) {
        localStorage.setItem('idInstruccion', idInstruccion);
        this.router.navigate(['/admin_editar_instrucciones']);
    }
    eliminar(idInstruccion) {
        this.instruccionesService.deleteInstruccion(idInstruccion).subscribe(res => {
            console.log(res);
            this.instrucciones = res;
            this.ngOnInit();
        }, err => {
            console.log(err);
        });
    }
};
AdminInstruccionesComponent = __decorate([
    Component({
        selector: 'app-admin-instrucciones',
        templateUrl: './admin-instrucciones.component.html',
        styleUrls: ['./admin-instrucciones.component.scss']
    })
], AdminInstruccionesComponent);
export { AdminInstruccionesComponent };
//# sourceMappingURL=admin-instrucciones.component.js.map