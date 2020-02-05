"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Se ponen llaves para coger un tipo específico
const express_1 = require("express");
const indexController_1 = require("../controladores/indexController");
class indexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.index);
    }
}
const indexRoute = new indexRoutes();
exports.default = indexRoute.router;
