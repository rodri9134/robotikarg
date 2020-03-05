import { Router } from 'express';
import { torneosController } from '../controladores/torneosController';
class torneosRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/', torneosController.create);
        this.router.get('/', torneosController.read);
        this.router.put('/:id', torneosController.update);
        this.router.delete('/:id', torneosController.delete);
        this.router.get('/:id', torneosController.readone);
    }
}
const torneosRoute = new torneosRoutes();
export default torneosRoute.router;
//# sourceMappingURL=torneosRoutes.js.map