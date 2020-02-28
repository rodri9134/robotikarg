"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const instruccionesUsuarioController_1 = require("../controladores/instruccionesUsuarioController");
class instruccionesUsuarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/instruccionesUsuario/:id', instruccionesUsuarioController_1.instruccionesUsuarioController.instruccionesUsuario);
        this.router.post('/', instruccionesUsuarioController_1.instruccionesUsuarioController.guardarInstruccionUsuario);
        this.router.get('/instruccionesUsuario/quitarInstruccionesUsuario/:id', instruccionesUsuarioController_1.instruccionesUsuarioController.eliminarInstruccionUsuario);
    }
}
const instruccionesRoute = new instruccionesUsuarioRoutes();
exports.default = instruccionesRoute.router;
