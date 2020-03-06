// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { instruccionesUsuarioController } from '../controladores/instruccionesUsuarioController';
class instruccionesUsuarioRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.get('/instruccionesUsuario/:id', instruccionesUsuarioController.instruccionesUsuario);
        this.router.post('/', instruccionesUsuarioController.guardarInstruccionUsuario);
        this.router.get('/instruccionesUsuario/quitarInstruccionesUsuario/:id', instruccionesUsuarioController.eliminarInstruccionUsuario);
    }
}
const instruccionesUsuarioRoute = new instruccionesUsuarioRoutes();
export default instruccionesUsuarioRoute.router;
//# sourceMappingURL=instruccionesUsuarioRoutes.js.map