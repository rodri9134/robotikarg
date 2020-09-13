"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const correo = express();
const configMensaje = require('../controladores/configMensaje');
class contactoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        correo.use(bodyParser.json());
        correo.use(cors());
        correo.post('/formulario', (req, res) => {
            console.log('------ ' + req.body);
            configMensaje(req.body);
            res.status(200).send();
        });
        correo.listen(3002, () => {
            //3002
            console.log('Servidor de correo corriendo');
        });
    }
}
const contactoRoute = new contactoRoutes();
exports.default = contactoRoute.router;
