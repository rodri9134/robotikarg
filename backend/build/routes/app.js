"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('../controladores/configMensaje');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/', (req, res) => { });
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
});
//Correo
app.listen(3002, () => {
    console.log('Servidor de correo corriendo');
});
app.listen(3000, () => {
    console.log('Servidor corriendo');
});
