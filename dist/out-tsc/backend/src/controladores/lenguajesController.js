import { __awaiter } from "tslib";
import pool from '../database';
class LenguajesController {
    index(req, res) {
        res.json({ message: 'Estas en lenguajes' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO lenguajes SET ?', [req.body]);
            res.json({ message: 'El lenguaje ha sido creado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes = yield pool.query('SELECT lenguajes.id,lenguajes.nombre FROM lenguajes', [req.body]);
            res.json(lenguajes);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('UPDATE lenguajes SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('DELETE FROM lenguajes WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes = yield pool.query('SELECT l.* FROM lenguajes WHERE id=?', [req.params.id]);
            res.json(lenguajes);
        });
    }
}
export const lenguajesController = new LenguajesController;
//# sourceMappingURL=lenguajesController.js.map