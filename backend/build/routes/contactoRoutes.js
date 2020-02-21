"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const correo = express();
class contactoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        correo.use(bodyParser.json());
        correo.use(cors());
        correo.post('/', (req, res) => { });
        correo.listen(3002, () => {
            console.log('Servidor corriendo');
        });
    }
}
const contactoRoute = new contactoRoutes();
exports.default = contactoRoute.router;
