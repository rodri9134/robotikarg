import { Request, Response,Express } from 'express';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('../controladores/configMensaje');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.post('/', (req:Request, res:Response) => {});

app.post('/formulario', (req: any, res: any) => {
    configMensaje(req.body);
    res.status(200).send();
})
//Correo
app.listen(3002, () => {
    console.log('Servidor de correo corriendo');
    });
app.listen(3000, () => {
console.log('Servidor corriendo');
});

