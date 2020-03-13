"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const rangoEdadController_1 = require("../controladores/rangoEdadController");
// tslint:disable-next-line: class-name
class rangoEdadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', rangoEdadController_1.rangoEdadController.create);
        this.router.get('/', rangoEdadController_1.rangoEdadController.read);
        this.router.put('/:id', rangoEdadController_1.rangoEdadController.update);
        this.router.delete('/:id', rangoEdadController_1.rangoEdadController.delete);
        this.router.get('/:id', rangoEdadController_1.rangoEdadController.readone);
    }
}
const rangoEdadRoute = new rangoEdadRoutes();
exports.default = rangoEdadRoute.router;
