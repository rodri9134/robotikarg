import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AdminTorneosComponent = class AdminTorneosComponent {
    constructor(torneosService) {
        this.torneosService = torneosService;
    }
    ngOnInit() {
        this.torneosService.getTorneos().subscribe(res => {
            console.log(res);
            this.torneos = res;
        }, err => {
            console.log(err);
        });
    }
    muestraTorneosProvincia() {
    }
    muestraTorneosEdad() {
    }
};
AdminTorneosComponent = __decorate([
    Component({
        selector: 'app-admin-torneos',
        templateUrl: './admin-torneos.component.html',
        styleUrls: ['./admin-torneos.component.scss']
    })
], AdminTorneosComponent);
export { AdminTorneosComponent };
//# sourceMappingURL=admin-torneos.component.js.map