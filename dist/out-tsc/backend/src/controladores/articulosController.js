import { __awaiter } from "tslib";
import pool from '../database';
class ArticulosController {
    index(req, res) {
        res.json({ message: 'Estas en articulos' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO articulos SET ?', [req.body]);
            res.json({ message: 'El articulos ha sido creado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const articulos = yield pool.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id ORDER BY t.nombre,c.nombre', [req.body]);
            res.json(articulos);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('UPDATE articulos SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('DELETE FROM articulos WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const articulos = yield pool.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id  WHERE id=?', [req.params.id]);
            res.json(articulos);
        });
    }
}
export const articulosController = new ArticulosController;
//# sourceMappingURL=articulosController.js.map