import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AdminEditarArticulosComponent = class AdminEditarArticulosComponent {
    constructor(router, formBuilder, articulosService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.articulosService = articulosService;
        this.editarArticuloForm = formBuilder.group({
            id: [''],
            titulo: ['', [Validators.required]],
            descripcion: ['', [Validators.required]],
            referencia: ['', [Validators.required]],
            imagen: ['', [Validators.required]],
            idCategoria: ['', [Validators.required]],
            idTienda: ['', [Validators.required]],
        });
    }
    ngOnInit() {
    }
    editarArticulo() {
        const idInstruccion = localStorage.getItem('idArticulo');
        this.articulosService.updateArticulo(idInstruccion, this.editarArticuloForm.value).subscribe(res => {
            console.log('Articulo actualizado correctamente');
            this.articulos = res;
            this.router.navigate(['/admin_articulos']);
        }, err => {
            console.log(err);
        });
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
    get idCategoria() {
        return this.editarArticuloForm.get('idCategoria');
    }
    get idTienda() {
        return this.editarArticuloForm.get('idTienda');
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