// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { rangoEdadController } from '../controladores/rangoEdadController';
// tslint:disable-next-line: class-name
class rangoEdadRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/', rangoEdadController.create);
        this.router.get('/', rangoEdadController.read);
        this.router.put('/:id', rangoEdadController.update);
        this.router.delete('/:id', rangoEdadController.delete);
        this.router.get('/:id', rangoEdadController.readone);

    }
}
const rangoEdadRoute = new rangoEdadRoutes();
export default rangoEdadRoute.router;