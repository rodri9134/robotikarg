import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AdminEditarInstruccionesComponent = class AdminEditarInstruccionesComponent {
    // tslint:disable-next-line: max-line-length
    constructor(router, formBuilder, instruccionesService, lenguajesService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.instruccionesService = instruccionesService;
        this.lenguajesService = lenguajesService;
        this.editarInstruccionForm = formBuilder.group({
            id: [''],
            instruccion: ['', [Validators.required]],
            accion: ['', [Validators.required]],
            idLenguaje: [''],
        });
    }
    ngOnInit() {
        const idInstruccion = localStorage.getItem('idInstruccion');
        this.instruccionesService.getInstruccion(idInstruccion).subscribe(res => {
            console.log('Instrucciones: ' + res);
            this.instrucciones = res;
        }, err => {
            console.log(err);
        });
        this.lenguajesService.getLenguajes().subscribe(res => {
            console.log(res);
            this.lenguajes = res;
        }, err => {
            console.log(err);
        });
    }
    editarInstruccion() {
        const idInstruccion = localStorage.getItem('idInstruccion');
        this.instruccionesService.updateInstruccion(idInstruccion, this.editarInstruccionForm.value).subscribe(res => {
            console.log('Instrucción actualizada correctamente');
            this.lenguajes = res;
            this.router.navigate(['/admin_instrucciones']);
        }, err => {
            console.log(err);
        });
    }
    get id() {
        return this.editarInstruccionForm.get('id');
    }
    get instruccion() {
        return this.editarInstruccionForm.get('instruccion');
    }
    get accion() {
        return this.editarInstruccionForm.get('accion');
    }
    get idLenguaje() {
        return this.editarInstruccionForm.get('idLenguaje');
    }
};
AdminEditarInstruccionesComponent = __decorate([
    Component({
        selector: 'app-admin-editar-instrucciones',
        templateUrl: './admin-editar-instrucciones.component.html',
        styleUrls: ['./admin-editar-instrucciones.component.scss']
    })
], AdminEditarInstruccionesComponent);
export { AdminEditarInstruccionesComponent };
//# sourceMappingURL=admin-editar-instrucciones.component.js.map