"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const lenguajesController_1 = require("../controladores/lenguajesController");
// tslint:disable-next-line: class-name
class articulosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', lenguajesController_1.lenguajesController.create);
        this.router.get('/', lenguajesController_1.lenguajesController.read);
        this.router.put('/:id', lenguajesController_1.lenguajesController.update);
        this.router.delete('/:id', lenguajesController_1.lenguajesController.delete);
        this.router.get('/:id', lenguajesController_1.lenguajesController.readone);
    }
}
const articulosRoute = new articulosRoutes();
exports.default = articulosRoute.router;
