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
class ArticulosController {
    index(req, res) {
        res.json({ message: 'Estas en articulos' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO articulos SET ?', [req.body]);
            res.json({ message: 'El articulos ha sido creado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const articulos = yield database_1.default.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id ORDER BY t.nombre,c.nombre', [req.body]);
            res.json(articulos);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE articulos SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM articulos WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const articulos = yield database_1.default.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id  WHERE id=?', [req.params.id]);
            res.json(articulos);
        });
    }
    articulosCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const articulos = yield database_1.default.query('SELECT * FROM articulos WHERE idCategoria=?', [req.params.id]);
            res.json(articulos);
        });
    }
    articulosTienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const articulos = yield database_1.default.query('SELECT * FROM articulos WHERE idTienda=?', [req.params.id]);
            res.json(articulos);
        });
    }
}
exports.articulosController = new ArticulosController;
