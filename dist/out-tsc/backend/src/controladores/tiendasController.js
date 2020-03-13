import { __awaiter } from "tslib";
import pool from '../database';
class TiendasController {
    index(req, res) {
        res.json({ message: 'Estas en tiendas' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO tiendas SET ?', [req.body]);
            res.json({ message: 'La tiendas ha sido creada' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const tiendas = yield pool.query('SELECT tiendas.* FROM tiendas', [req.body]);
            res.json(tiendas);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('UPDATE tiendas SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('DELETE FROM tiendas WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tiendas = yield pool.query('SELECT * FROM tiendas WHERE id=?', [req.params.id]);
            res.json(tiendas);
        });
    }
}
// tslint:disable-next-line: new-parens
export const tiendasController = new TiendasController;
//# sourceMappingURL=tiendasController.js.map