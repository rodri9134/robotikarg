"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const articulosController_1 = require("../controladores/articulosController");
// tslint:disable-next-line: class-name
class articulosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', articulosController_1.articulosController.create);
        this.router.get('/', articulosController_1.articulosController.read);
        this.router.put('/:id', articulosController_1.articulosController.update);
        this.router.delete('/:id', articulosController_1.articulosController.delete);
        this.router.get('/:id', articulosController_1.articulosController.readone);
        this.router.get('/articulosTienda/:id', articulosController_1.articulosController.articulosTienda);
        this.router.get('/articulosCategoria/:id', articulosController_1.articulosController.articulosCategoria);
    }
}
const articulosRoute = new articulosRoutes();
exports.default = articulosRoute.router;
