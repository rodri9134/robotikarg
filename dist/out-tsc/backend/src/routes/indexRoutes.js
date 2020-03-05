// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { indexController } from '../controladores/indexController';
class indexRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController.index);
    }
}
const indexRoute = new indexRoutes();
export default indexRoute.router;
//# sourceMappingURL=indexRoutes.js.map