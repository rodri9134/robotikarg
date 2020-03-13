import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminArticulosComponent = class AdminArticulosComponent {
    constructor(router, articulosService, categoriasService, tiendasService) {
        this.router = router;
        this.articulosService = articulosService;
        this.categoriasService = categoriasService;
        this.tiendasService = tiendasService;
    }
    ngOnInit() {
        this.articulosService.getArticulos().subscribe(res => {
            console.log(res);
            this.articulos = res;
        }, err => {
            console.log(err);
        });
        this.tiendasService.getTiendas2().subscribe(res => {
            console.log(res);
            this.tiendas = res;
        }, err => {
            console.log(err);
        });
        this.categoriasService.getCategorias().subscribe(res => {
            console.log(res);
            this.categorias = res;
        }, err => {
            console.log(err);
        });
    }
    editar(id) {
        const articulo = this.articulosService.getArticulo(id);
        this.router.navigate(['/admin_editar_articulos']);
    }
    eliminar(id) {
        this.articulosService.deleteArticulo(id).subscribe(res => {
            this.router.navigate(['/admin_articulos']);
        }, (err) => {
            console.log(err);
        });
    }
    muestraArticulosTienda(id) {
        this.articulosService.getArticulosTienda(id).subscribe(res => {
            console.log(res);
            this.articulos = res;
        }, err => {
            console.log(err);
        });
    }
    muestraArticulosCategoria(id) {
        this.articulosService.getArticulosCategoria(id).subscribe(res => {
            console.log(res);
            this.articulos = res;
        }, err => {
            console.log(err);
        });
    }
};
AdminArticulosComponent = __decorate([
    Component({
        selector: 'app-admin-articulos',
        templateUrl: './admin-articulos.component.html',
        styleUrls: ['./admin-articulos.component.scss']
    })
], AdminArticulosComponent);
export { AdminArticulosComponent };
//# sourceMappingURL=admin-articulos.component.js.map