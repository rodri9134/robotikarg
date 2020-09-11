import { Request, Response, Router } from 'express';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const correo = express();
const configMensaje=require('../controladores/configMensaje');

class contactoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();

    }
    config(): void {

        correo.use(bodyParser.json());
        correo.use(cors());
        correo.post('/formulario', (req:Request, res:Response) => {
            console.log('------ '+req.body);
            configMensaje(req.body);
            res.status(200).send();
        });
    
        correo.listen(3000, () => {
            //3002
        console.log('Servidor de correo corriendo');
        });
    }


}
const contactoRoute = new contactoRoutes();
export default contactoRoute.router;
