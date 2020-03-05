import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminInstruccionesComponent = class AdminInstruccionesComponent {
    constructor(router, instruccionesService, instruccionesUsuarioService) {
        this.router = router;
        this.instruccionesService = instruccionesService;
        this.instruccionesUsuarioService = instruccionesUsuarioService;
    }
    ngOnInit() {
        this.instruccionesService.getInstrucciones().subscribe(res => {
            console.log(res);
            this.instrucciones = res;
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