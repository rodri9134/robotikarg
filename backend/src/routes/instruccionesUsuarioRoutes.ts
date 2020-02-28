// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { instruccionesUsuarioController } from '../controladores/instruccionesUsuarioController';

class instruccionesUsuarioRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {

        this.router.get('/instruccionesUsuario/:id', instruccionesUsuarioController.instruccionesUsuario);
        this.router.post('/', instruccionesUsuarioController.guardarInstruccionUsuario);
        this.router.get('/instruccionesUsuario/quitarInstruccionesUsuario/:id',instruccionesUsuarioController.eliminarInstruccionUsuario)

    }


}
const instruccionesRoute = new instruccionesUsuarioRoutes();
export default instruccionesRoute.router;
