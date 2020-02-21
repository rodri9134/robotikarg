"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const instruccionesController_1 = require("../controladores/instruccionesController");
class instruccionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', instruccionesController_1.instruccionesController.create);
        this.router.get('/', instruccionesController_1.instruccionesController.read);
        this.router.put('/:id', instruccionesController_1.instruccionesController.update);
        this.router.delete('/:id', instruccionesController_1.instruccionesController.delete);
        this.router.get('/:id', instruccionesController_1.instruccionesController.readone);
        this.router.get('/instruccionesUsuario/:id', instruccionesController_1.instruccionesController.instruccionesUsuario);
        this.router.post('/:id', instruccionesController_1.instruccionesController.guardarInstrucciones);
    }
}
const instruccionesRoute = new instruccionesRoutes();
exports.default = instruccionesRoute.router;
