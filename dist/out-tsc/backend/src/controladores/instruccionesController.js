import { __awaiter } from "tslib";
import pool from '../database';
class InstruccionesController {
    index(req, res) {
        res.json({ message: 'Estas en instrucciones' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTO instrucciones SET ?', [req.body]);
            res.json({ message: 'La instruccion ha sido creada' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const instrucciones = yield pool.query('SELECT i.*,l.nombre AS lenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id ORDER BY l.nombre', [req.body]);
            res.json(instrucciones);
        });
    }
    readLenguaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const instrucciones = yield pool.query('SELECT i.*,l.nombre AS lenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id WHERE i.idLenguaje=? ORDER BY l.nombre', [req.params.id]);
            res.json(instrucciones);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('UPDATE instrucciones SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('DELETE FROM instrucciones WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const instrucciones = yield pool.query('SELECT * FROM instrucciones WHERE id=?', [req.params.id]);
            res.json(instrucciones);
        });
    }
    instruccionesUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const misInstrucciones = yield pool.query('SELECT i.id,i.instruccion,i.accion,l.nombre as nombreLenguaje FROM instrucciones i INNER JOIN instrucciones_usuarios iu ON iu.idInstruccion=i.id INNER JOIN usuarios u ON iu.idUsuario=u.id INNER JOIN lenguajes l ON l.id=i.idLenguaje WHERE u.id=?', [req.params.id]);
            res.json(misInstrucciones);
        });
    }
    guardarInstrucciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Req body ' + req.params.idUsuario);
            yield pool.query('INSERT INTO instrucciones_usuarios SET ?', [req.body]);
            res.json({ message: 'Tu instrucción ha sido añadida' });
        });
    }
}
export const instruccionesController = new InstruccionesController;
//# sourceMappingURL=instruccionesController.js.map