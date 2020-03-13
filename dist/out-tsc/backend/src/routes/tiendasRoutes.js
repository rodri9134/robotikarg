// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { tiendasController } from '../controladores/tiendasController';
// tslint:disable-next-line: class-name
class tiendasRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/', tiendasController.create);
        this.router.get('/', tiendasController.read);
        this.router.put('/:id', tiendasController.update);
        this.router.delete('/:id', tiendasController.delete);
        this.router.get('/:id', tiendasController.readone);
    }
}
const tiendasRoute = new tiendasRoutes();
export default tiendasRoute.router;
//# sourceMappingURL=tiendasRoutes.js.map