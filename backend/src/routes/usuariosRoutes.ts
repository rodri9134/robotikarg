//Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { usuariosController } from '../controladores/usuariosController';
class usuariosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/', usuariosController.create);
        this.router.get('/', usuariosController.read);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/:id', usuariosController.delete);
        this.router.get('/:id', usuariosController.readone);
        this.router.post('/login', usuariosController.readLogin);
    }
}
const usuariosRoute = new usuariosRoutes();
export default usuariosRoute.router;