import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminEditarArticulosComponent = class AdminEditarArticulosComponent {
    constructor(router, formBuilder, articulosService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.articulosService = articulosService;
    }
    ngOnInit() {
    }
    editarArticulo() {
    }
    // titulo,descripcion,referencia,precio,imagen
    get id() {
        return this.editarArticuloForm.get('id');
    }
    get titulo() {
        return this.editarArticuloForm.get('titulo');
    }
    get descripcion() {
        return this.editarArticuloForm.get('descripcion');
    }
    get referencia() {
        return this.editarArticuloForm.get('referencia');
    }
    get precio() {
        return this.editarArticuloForm.get('precio');
    }
    get imagen() {
        return this.editarArticuloForm.get('imagen');
    }
};
AdminEditarArticulosComponent = __decorate([
    Component({
        selector: 'app-admin-editar-articulos',
        templateUrl: './admin-editar-articulos.component.html',
        styleUrls: ['./admin-editar-articulos.component.scss']
    })
], AdminEditarArticulosComponent);
export { AdminEditarArticulosComponent };
//# sourceMappingURL=admin-editar-articulos.component.js.map