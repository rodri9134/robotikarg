// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { instruccionesUsuarioController } from '../controladores/instruccionesUsuarioController';

class instruccionesUsuarioRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {

        this.router.get('/:id', instruccionesUsuarioController.instruccionesUsuario);
        this.router.post('/', instruccionesUsuarioController.guardarInstruccionUsuario);
        this.router.get('/eliminarInstruccionUsuario/:id',instruccionesUsuarioController.eliminarInstruccionUsuario)

    }


}
const instruccionesUsuarioRoute = new instruccionesUsuarioRoutes();
export default instruccionesUsuarioRoute.router;
