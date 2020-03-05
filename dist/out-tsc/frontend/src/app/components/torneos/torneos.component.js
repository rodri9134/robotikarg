import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TorneosComponent = class TorneosComponent {
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
};
TorneosComponent = __decorate([
    Component({
        selector: 'app-torneos',
        templateUrl: './torneos.component.html',
        styleUrls: ['./torneos.component.scss']
    })
], TorneosComponent);
export { TorneosComponent };
//# sourceMappingURL=torneos.component.js.map