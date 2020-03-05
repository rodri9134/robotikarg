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
class LenguajesController {
    index(req, res) {
        res.json({ message: 'Estas en lenguajes' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO lenguajes SET ?', [req.body]);
            res.json({ message: 'El lenguaje ha sido creado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes = yield database_1.default.query('SELECT lenguajes.id,lenguajes.nombre FROM lenguajes', [req.body]);
            res.json(lenguajes);
        });
    }
    read2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes = yield database_1.default.query('SELECT lenguajes.id, lenguajes.nombre FROM lenguajes', [req.body]);
            res.json(lenguajes);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('UPDATE lenguajes SET ? WHERE id=?', [req.params.id]);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM lenguajes WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lenguajes = yield database_1.default.query('SELECT l.* FROM lenguajes WHERE id=?', [req.params.id]);
            res.json(lenguajes);
        });
    }
}
exports.lenguajesController = new LenguajesController;
