// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { categoriasController } from '../controladores/categoriasController';
// tslint:disable-next-line: class-name
class tiendasRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/', categoriasController.create);
        this.router.get('/', categoriasController.read);
        this.router.put('/:id', categoriasController.update);
        this.router.delete('/:id', categoriasController.delete);
        this.router.get('/:id', categoriasController.readone);
    }
}
const categoriasRoute = new tiendasRoutes();
export default categoriasRoute.router;
//# sourceMappingURL=categoriasRoutes.js.map