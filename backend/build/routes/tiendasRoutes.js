"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const tiendasController_1 = require("../controladores/tiendasController");
// tslint:disable-next-line: class-name
class tiendasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', tiendasController_1.tiendasController.create);
        this.router.get('/', tiendasController_1.tiendasController.read);
        this.router.put('/:id', tiendasController_1.tiendasController.update);
        this.router.delete('/:id', tiendasController_1.tiendasController.delete);
        this.router.get('/:id', tiendasController_1.tiendasController.readone);
    }
}
const tiendasRoute = new tiendasRoutes();
exports.default = tiendasRoute.router;
