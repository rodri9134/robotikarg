import { __awaiter } from "tslib";
import pool from '../database';
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
            yield pool.query('INSERT INTO usuarios SET ?', [req.body]);
            res.json({ message: 'El usuario ha sido creado' });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield pool.query('SELECT * FROM usuarios', [req.body]);
            res.json(usuarios);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log(req.params);
            console.log(req.params.id);
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
            yield pool.query('UPDATE usuarios SET ? WHERE id=?', [req.body, req.params.id]);
            res.json({ message: 'El usuario ha sido actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
        });
    }
    readone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield pool.query('SELECT * FROM usuarios WHERE email', [req.params.id]);
            res.json(usuarios);
        });
    }
    idUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.email);
            const idUsuario = yield pool.query('SELECT id FROM usuarios WHERE email = ?', [req.body.email]);
            console.log('Id usuario: ', idUsuario);
            res.json(idUsuario);
        });
    }
    readAdminLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiaUsuario = {
                email: req.body.email,
                password: req.body.password
            };
            const usuario = yield pool.query('SELECT * FROM usuarios WHERE idRol=2 AND email = ?', [req.body.email]);
        });
    }
    readLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const copiaUsuario = {
                email: req.body.email,
                password: req.body.password
            };
            const usuario = yield pool.query('SELECT * FROM usuarios WHERE email = ?', [req.body.email]);
            // bcrypt compare ususarios[0].password
            // const usuarios = await pool.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [req.body.email, req.body.password]);
            console.log(usuario);
            console.log(usuario[0].email);
            if (usuario.length == 0) {
                res.json({ message: 'Correo incorrecto' });
            }
            else {
                console.log('Texto plano: ' + req.body.password);
                console.log('Contraseña usuario: ' + usuario[0].password);
                const comparar = bcrypt.compareSync(req.body.password, usuario[0].password);
                console.log('Comparar ' + comparar);
                if (!comparar) {
                    const expiraen = 24 * 60 * 60;
                    const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiraen });
                    console.log('Credenciales validas');
                    console.log(accessToken);
                    res.json(accessToken);
                }
                else {
                    console.log('Contraseña incorrecta');
                    res.json({ message: 'Contraseña incorrecta' });
                }
                //   res.json(usuarios);
            }
        });
    }
}
// tslint:disable-next-line: new-parens
export const usuariosController = new UsuariosController;
//# sourceMappingURL=usuariosController.js.map