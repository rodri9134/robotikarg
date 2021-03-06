// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { instruccionesController } from '../controladores/instruccionesController';
class instruccionesRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/', instruccionesController.create);
        this.router.get('/', instruccionesController.read);
        this.router.put('/:id', instruccionesController.update);
        this.router.delete('/:id', instruccionesController.delete);
       this.router.get('/:id', instruccionesController.readLenguaje);
       this.router.get('/leerInstrucion/:id', instruccionesController.leerInstruccion);
    //    this.router.get('/instruccionesUsuario/:id', instruccionesController.instruccionesUsuario);
    //    this.router.post('/guardarInstrucciones/:id', instruccionesController.guardarInstrucciones);
   

    }


}
const instruccionesRoute = new instruccionesRoutes();
export default instruccionesRoute.router;
