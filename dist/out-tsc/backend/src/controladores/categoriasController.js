import { __awaiter } from "tslib";
import pool from '../database';
class CategoriasController {
    index(req, res) {
        res.json({ message: 'Estas en categorias' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO categorias SET ?', [req.body]);
            res.json({ message: 'La categoria ha sido creada' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const torneos = yield pool.query('SELECT * FROM categorias', [req.body]);
            res.json(torneos);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('UPDATE categorias SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('DELETE FROM categorias WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categorias = yield pool.query('SELECT * FROM categorias WHERE id=?', [req.params.id]);
            res.json(categorias);
        });
    }
}
// tslint:disable-next-line: new-parens
export const categoriasController = new CategoriasController;
//# sourceMappingURL=categoriasController.js.map