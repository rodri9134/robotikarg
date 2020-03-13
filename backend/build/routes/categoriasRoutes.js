"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const categoriasController_1 = require("../controladores/categoriasController");
// tslint:disable-next-line: class-name
class tiendasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', categoriasController_1.categoriasController.create);
        this.router.get('/', categoriasController_1.categoriasController.read);
        this.router.put('/:id', categoriasController_1.categoriasController.update);
        this.router.delete('/:id', categoriasController_1.categoriasController.delete);
        this.router.get('/:id', categoriasController_1.categoriasController.readone);
    }
}
const categoriasRoute = new tiendasRoutes();
exports.default = categoriasRoute.router;
