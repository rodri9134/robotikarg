"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const torneosController_1 = require("../controladores/torneosController");
class torneosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', torneosController_1.torneosController.create);
        this.router.get('/', torneosController_1.torneosController.read);
        this.router.put('/:id', torneosController_1.torneosController.update);
        this.router.delete('/:id', torneosController_1.torneosController.delete);
        this.router.get('/:id', torneosController_1.torneosController.readone);
        this.router.get('/torneosProvincia/:id', torneosController_1.torneosController.torneosProvincia);
        this.router.get('/torneosEdad/:id', torneosController_1.torneosController.torneosEdad);
    }
}
const torneosRoute = new torneosRoutes();
exports.default = torneosRoute.router;
