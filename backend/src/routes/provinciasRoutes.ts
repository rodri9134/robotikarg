// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { provinciasController } from '../controladores/provinciasController';
// tslint:disable-next-line: class-name
class provinciasRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/', provinciasController.create);
        this.router.get('/', provinciasController.read);
        this.router.put('/:id', provinciasController.update);
        this.router.delete('/:id', provinciasController.delete);
        this.router.get('/:id', provinciasController.readone);

    }


}
const provinciasRoute = new provinciasRoutes();
export default provinciasRoute.router;