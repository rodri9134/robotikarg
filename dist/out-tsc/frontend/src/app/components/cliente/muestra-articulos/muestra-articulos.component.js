import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MuestraArticulosComponent = class MuestraArticulosComponent {
    constructor(articulosService) {
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
};
MuestraArticulosComponent = __decorate([
    Component({
        selector: 'app-muestra-articulos',
        templateUrl: './muestra-articulos.component.html',
        styleUrls: ['./muestra-articulos.component.scss']
    })
], MuestraArticulosComponent);
export { MuestraArticulosComponent };
//# sourceMappingURL=muestra-articulos.component.js.map