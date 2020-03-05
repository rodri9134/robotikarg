// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { lenguajesController } from '../controladores/lenguajesController';
// tslint:disable-next-line: class-name
class lenguajesRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/', lenguajesController.create);
        this.router.get('/', lenguajesController.read);
        this.router.put('/:id', lenguajesController.update);
        this.router.delete('/:id', lenguajesController.delete);
        this.router.get('/:id', lenguajesController.readone);
    }
}
const lenguajesRoute = new lenguajesRoutes();
export default lenguajesRoute.router;
//# sourceMappingURL=lenguajesRoutes.js.map