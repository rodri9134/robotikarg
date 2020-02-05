//Se ponen llaves para coger un tipo específico
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
        this.router.get('/:id', instruccionesController.readone);

    }


}
const instruccionesRoute = new instruccionesRoutes();
export default instruccionesRoute.router;