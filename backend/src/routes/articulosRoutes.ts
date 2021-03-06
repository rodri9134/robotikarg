// Se ponen llaves para coger un tipo específico
import { Router } from 'express';
import { articulosController } from '../controladores/articulosController';
// tslint:disable-next-line: class-name
class articulosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.post('/', articulosController.create);
        this.router.get('/', articulosController.read);
        this.router.put('/:id', articulosController.update);
        this.router.delete('/:id', articulosController.delete);
        this.router.get('/:id', articulosController.readone);
        this.router.get('/articulosTienda/:id', articulosController.articulosTienda);
        this.router.get('/articulosCategoria/:id', articulosController.articulosCategoria);

    }


}
const articulosRoute = new articulosRoutes();
export default articulosRoute.router;