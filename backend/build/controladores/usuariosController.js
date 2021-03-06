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
const bcrypt = require('bcryptjs');
const saltRounds = 10;
let passPlano = '';
const SECRET_KEY = 'miClaveSecreta';
class UsuariosController {
    index(req, res) {
        res.json({ message: 'Estas en usuarios' });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            passPlano = req.body.password;
            const encriptada = bcrypt.hashSync(passPlano, saltRounds);
            /*
            const encriptada = await new Promise((resolve, reject) => {
                bcrypt.hash(passPlano, saltRounds, function (err: any, hash: any) {
                    if (err) reject(err)
                    resolve(hash)
                });
            });
    */
            req.body.password = encriptada;
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
            passPlano = req.body.password;
            const encriptada = bcrypt.hashSync(passPlano, saltRounds);
            /*
            const encriptada = await new Promise((resolve, reject) => {
                bcrypt.hash(passPlano, saltRounds, function (err: any, hash: any) {
                    if (err) reject(err)
                    resolve(hash)
                });
            });
    */
            req.body.password = encriptada;
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
            const usuarios = yield database_1.default.query('SELECT * FROM usuarios WHERE email', [req.params.id]);
            res.json(usuarios);
        });
    }
    idUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUsuario = yield database_1.default.query('SELECT id FROM usuarios WHERE email = ? AND idRol=1', [req.body.email]);
            res.json(idUsuario);
        });
    }
    readAdminLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("P "+req.body.password
            // );
            // console.log("Email "+req.body.email);
            const copiaUsuario = {
                email: req.body.email,
                password: req.body.password
            };
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE idRol=2 AND email = ?', [req.body.email]);
            if (usuario.length == 0) {
                res.json({ message: 'Correo incorrecto' });
            }
            else {
                const comparar = bcrypt.compareSync(req.body.password, usuario[0].password);
                console.log("comparar " + comparar);
                if (comparar) {
                    const expiraen = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiraen });
                    res.json(accessToken);
                }
                else {
                    res.json({ message: 'Contraseña incorrecta del admin' });
                }
            }
        });
    }
    readLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiaUsuario = {
                email: req.body.email,
                password: req.body.password
            };
            const usuario = yield database_1.default.query('SELECT * FROM usuarios WHERE idrol=1 AND email = ?', [req.body.email]);
            if (usuario.length == 0) {
                res.json({ message: 'Correo incorrecto' });
            }
            else {
                const comparar = bcrypt.compareSync(req.body.password, usuario[0].password);
                if (comparar) {
                    const expiraen = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiraen });
                    res.json(accessToken);
                }
                else {
                    res.json({ message: 'Contraseña incorrecta' });
                }
                //   res.json(usuarios);
            }
        });
    }
}
// tslint:disable-next-line: new-parens
exports.usuariosController = new UsuariosController;
