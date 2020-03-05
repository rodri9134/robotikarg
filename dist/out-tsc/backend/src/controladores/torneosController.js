import { __awaiter } from "tslib";
import pool from '../database';
class TorneosController {
    index(req, res) {
        res.json({ message: 'Estas en torneos' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO torneos SET ?', [req.body]);
            res.json({ message: 'El torneo ha sido creado' });
        });
    }
    // public async read(req: Request, res: Response) {
    //     const torneos = await pool.query('SELECT * FROM torneos', [req.body]);
    //     res.json(torneos);
    // }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const torneos = yield pool.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id ORDER BY torneos.fecha', [req.body]);
            res.json(torneos);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('UPDATE torneos SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('DELETE FROM torneos WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const torneos = yield pool.query('SELECT * FROM torneos WHERE id=?', [req.params.id]);
            res.json(torneos);
        });
    }
}
// tslint:disable-next-line: new-parens
export const torneosController = new TorneosController;
//# sourceMappingURL=torneosController.js.map