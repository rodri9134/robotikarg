import { Router } from 'express';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const correo = express();
class contactoRoutes {
    constructor() {
        this.router = Router();
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
export default contactoRoute.router;
//# sourceMappingURL=contactoRoutes.js.map