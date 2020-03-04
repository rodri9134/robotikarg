// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { lenguajesController } from '../controladores/lenguajesController';
// tslint:disable-next-line: class-name
class articulosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/', lenguajesController.create);
        this.router.get('/', lenguajesController.read);
        this.router.put('/:id', lenguajesController.update);
        this.router.delete('/:id', lenguajesController.delete);
        this.router.get('/:id', lenguajesController.readone);

    }


}
const articulosRoute = new articulosRoutes();
export default articulosRoute.router;