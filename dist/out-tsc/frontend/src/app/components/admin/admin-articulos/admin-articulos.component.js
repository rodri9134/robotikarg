import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminArticulosComponent = class AdminArticulosComponent {
    constructor(router, articulosService) {
        this.router = router;
        this.articulosService = articulosService;
    }
    ngOnInit() {
        this.articulosService.getArticulos().subscribe(res => {
            console.log(res);
            this.articulos = res;
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