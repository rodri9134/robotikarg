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
const fs = require('fs');
class TorneosController {
    index(req, res) {
        res.json({ message: 'Estas en torneos' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO torneos SET ?', [req.body]);
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
            const torneos = yield database_1.default.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id ORDER BY torneos.fecha', [req.body]);
            res.json(torneos);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE torneos SET ? WHERE id=?', [req.body, req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM torneos WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const torneos = yield database_1.default.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id WHERE torneos.id=? ORDER BY torneos.fecha ', [req.params.id]);
            res.json(torneos);
        });
    }
    rangoEdad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rangoEdad = yield database_1.default.query('SELECT * FROM rangoedad', [req.body]);
            res.json(rangoEdad);
        });
    }
    provincias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const provincias = yield database_1.default.query('SELECT * FROM provincias WHERE id=?', [req.body]);
            res.json(provincias);
        });
    }
    torneosProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const torneos = yield database_1.default.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id WHERE torneos.idprovincia=? ORDER BY torneos.fecha', [req.params.id]);
            res.json(torneos);
        });
    }
    torneosEdad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Id Edad ' + req.params.id);
            const torneos = yield database_1.default.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id WHERE torneos.idrangoedad=? ORDER BY torneos.fecha', [req.params.id]);
            res.json(torneos);
        });
    }
}
// tslint:disable-next-line: new-parens
exports.torneosController = new TorneosController;
