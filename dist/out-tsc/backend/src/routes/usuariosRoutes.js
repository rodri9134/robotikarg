// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { usuariosController } from '../controladores/usuariosController';
class usuariosRoutes {
    constructor() {
        this.router = Router();
        this.config();
    }
    config() {
        this.router.post('/', usuariosController.create);
        this.router.get('/', usuariosController.read);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/:id', usuariosController.delete);
        this.router.get('/:id', usuariosController.readone);
        this.router.post('/admin/login', usuariosController.readAdminLogin);
        this.router.post('/login', usuariosController.readLogin);
        this.router.post('/idUsuario', usuariosController.idUsuario);
    }
}
const usuariosRoute = new usuariosRoutes();
export default usuariosRoute.router;
//# sourceMappingURL=usuariosRoutes.js.map