"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InstruccionesController {
    index(req, res) {
        res.json({ message: 'Estas en instrucciones' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO instrucciones SET ?', [req.body]);
            res.json({ message: 'La instruccion ha sido creada' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const instrucciones = yield database_1.default.query('SELECT i.*,l.nombre AS lenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id ORDER BY l.nombre', [req.body]);
            res.json(instrucciones);
        });
    }
    readLenguaje(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const instrucciones = yield database_1.default.query('SELECT i.*,l.nombre AS lenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id WHERE i.idLenguaje=? ORDER BY l.nombre', [req.params.id]);
            res.json(instrucciones);
        });
    }
    leerInstruccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const instrucciones = yield database_1.default.query('SELECT i.*,l.nombre AS nombrelenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id  WHERE i.id=?', [req.params.id]);
            res.json(instrucciones);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Instruccion' + req.body);
            console.log('Id ' + req.params.id);
            const id = req.params.id;
            req.body.id = id;
            yield database_1.default.query('UPDATE instrucciones SET ? WHERE id=?', [req.body, req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM instrucciones WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const instrucciones = yield database_1.default.query('SELECT * FROM instrucciones WHERE id=?', [req.params.id]);
            res.json(instrucciones);
        });
    }
    instruccionesUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const misInstrucciones = yield database_1.default.query('SELECT iu.id AS idInstruccionUsuario,i.id,i.instruccion,i.accion,l.nombre as nombreLenguaje FROM instrucciones i INNER JOIN instrucciones_usuarios iu ON iu.idInstruccion=i.id INNER JOIN usuarios u ON iu.idUsuario=u.id INNER JOIN lenguajes l ON l.id=i.idLenguaje WHERE u.id=?', [req.params.id]);
            res.json(misInstrucciones);
        });
    }
    guardarInstrucciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Req body ' + req.params.idUsuario);
            yield database_1.default.query('INSERT INTO instrucciones_usuarios SET ?', [req.body]);
            res.json({ message: 'Tu instrucción ha sido añadida' });
        });
    }
}
exports.instruccionesController = new InstruccionesController;
