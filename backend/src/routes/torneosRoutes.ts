import { Router } from 'express';
import { torneosController } from '../controladores/torneosController';
class torneosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/', torneosController.create);
        this.router.get('/', torneosController.read);
        this.router.put('/:id', torneosController.update);
        this.router.delete('/:id', torneosController.delete);
        this.router.get('/:id', torneosController.readone);
        this.router.get('/torneosProvincia/:id', torneosController.torneosProvincia);
        this.router.get('/torneosEdad/:id', torneosController.torneosEdad);

    }
}
const torneosRoute = new torneosRoutes();
export default torneosRoute.router;