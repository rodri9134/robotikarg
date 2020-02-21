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
const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');
const SECRET_KEY = 'miClaveSecreta';
class UsuariosController {
    index(req, res) {
        res.json({ message: 'Estas en usuarios' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json({ message: 'El usuario ha sido creado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios', [req.body]);
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log(req.params);
            console.log(req.params.id);
            yield database_1.default.query('UPDATE usuarios SET ? WHERE id=?', [req.body, req.params.id]);
            res.json({ message: 'El usuario ha sido actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
            res.json(usuarios);
        });
    }
    readLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(req.body);
            const copiaUsuario = {
                email: req.body.email,
                password: req.body.password
            };
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [req.body.email, req.body.password]);
            console.log(usuarios.length);
            if (usuarios.length == 0) {
                res.json({ message: 'Error al loguearse' });
            }
            else {
                //res.json({ message: "Credenciales válidas" });
                // res.json(usuarios);
                const expiraen = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiraen });
                console.log('Credenciales validas');
                console.log(accessToken);
                res.json(accessToken);
            }
            //   res.json(usuarios);
        });
    }
}
// tslint:disable-next-line: new-parens
exports.usuariosController = new UsuariosController;
