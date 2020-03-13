import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AdminInsertarInstruccionesComponent = class AdminInsertarInstruccionesComponent {
    constructor(router, formBuilder, instruccionesService, lenguajesService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.instruccionesService = instruccionesService;
        this.lenguajesService = lenguajesService;
        this.insertarInstruccionForm = formBuilder.group({
            id: [''],
            instruccion: ['', [Validators.required]],
            accion: ['', [Validators.required]],
            idLenguaje: [''],
        });
    }
    ngOnInit() {
        this.lenguajesService.getLenguajes().subscribe(res => {
            console.log(res);
            this.lenguajes = res;
        }, err => {
            console.log(err);
        });
    }
    insertarInstruccion() {
        this.instruccionesService.saveInstruccion(this.insertarInstruccionForm.value).subscribe(res => {
            console.log(res);
            this.instrucciones = res;
            this.router.navigate(['/admin_instrucciones']);
        }, err => {
            console.log(err);
        });
    }
    get id() {
        return this.insertarInstruccionForm.get('id');
    }
    get instruccion() {
        return this.insertarInstruccionForm.get('instruccion');
    }
    get accion() {
        return this.insertarInstruccionForm.get('accion');
    }
    get idLenguaje() {
        return this.insertarInstruccionForm.get('idLenguaje');
    }
};
AdminInsertarInstruccionesComponent = __decorate([
    Component({
        selector: 'app-admin-insertar-instrucciones',
        templateUrl: './admin-insertar-instrucciones.component.html',
        styleUrls: ['./admin-insertar-instrucciones.component.scss']
    })
], AdminInsertarInstruccionesComponent);
export { AdminInsertarInstruccionesComponent };
//# sourceMappingURL=admin-insertar-instrucciones.component.js.map