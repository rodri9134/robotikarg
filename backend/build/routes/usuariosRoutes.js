"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const usuariosController_1 = require("../controladores/usuariosController");
class usuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', usuariosController_1.usuariosController.create);
        this.router.get('/', usuariosController_1.usuariosController.read);
        this.router.put('/:id', usuariosController_1.usuariosController.update);
        this.router.delete('/:id', usuariosController_1.usuariosController.delete);
        this.router.get('/:id', usuariosController_1.usuariosController.readone);
        this.router.post('/login', usuariosController_1.usuariosController.readLogin);
    }
}
const usuariosRoute = new usuariosRoutes();
exports.default = usuariosRoute.router;
