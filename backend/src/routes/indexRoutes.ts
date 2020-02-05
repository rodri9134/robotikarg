//Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { indexController } from '../controladores/indexController';
class indexRoutes {
    public router: Router = Router();
    constructor() {
        this.config();

    }
    config(): void {

        this.router.get('/', indexController.index);
    }


}
const indexRoute = new indexRoutes();
export default indexRoute.router;