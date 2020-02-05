"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const articulosController_1 = require("../controladores/articulosController");
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
    }
}
const articulosRoute = new articulosRoutes();
exports.default = articulosRoute.router;
