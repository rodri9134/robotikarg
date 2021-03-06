import { Request, Response } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
let passPlano = '';

const SECRET_KEY = 'miClaveSecreta';
class UsuariosController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en usuarios' });
    }
    public async create(req: Request, res: Response) {

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

        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        res.json({ message: 'El usuario ha sido creado' });

    }


    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }
    public async update(req: Request, res: Response) {

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
        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.body, req.params.id]);
        res.json({ message: 'El usuario ha sido actualizado' });

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const usuarios = await pool.query('SELECT * FROM usuarios WHERE email', [req.params.id]);
        res.json(usuarios);
    }

    public async idUsuario(req: Request, res: Response) {

        const idUsuario = await pool.query('SELECT id FROM usuarios WHERE email = ? AND idRol=1', [req.body.email]);

        res.json(idUsuario);

    }
    public async readAdminLogin(req: Request, res: Response) {
        // console.log("P "+req.body.password
        // );
        // console.log("Email "+req.body.email);
        const copiaUsuario = {
            email: req.body.email,
            password: req.body.password
        };
        const usuario = await pool.query('SELECT * FROM usuarios WHERE idRol=2 AND email = ?', [req.body.email]);

        if (usuario.length == 0) {

            res.json({ message: 'Correo incorrecto' });
        }
        else {

            const comparar = bcrypt.compareSync(req.body.password, usuario[0].password);
            console.log("comparar "+comparar);
            if (comparar) {
                const expiraen = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiraen });
         
                res.json(accessToken);

            } else {

   
                res.json({ message: 'Contraseña incorrecta del admin' });

            }

        }
    }
    public async readLogin(req: Request, res: Response) {

        const copiaUsuario = {
            email: req.body.email,
            password: req.body.password
        };
        const usuario = await pool.query('SELECT * FROM usuarios WHERE idrol=1 AND email = ?', [req.body.email]);

        if (usuario.length == 0) {

            res.json({ message: 'Correo incorrecto' });
        }
        else {

            const comparar = bcrypt.compareSync(req.body.password, usuario[0].password);
      
            if (comparar) {
                const expiraen = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiraen });
                res.json(accessToken);

            } else {

     
                res.json({ message: 'Contraseña incorrecta' });

            }


            //   res.json(usuarios);
        }
    }
}

// tslint:disable-next-line: new-parens
export const usuariosController = new UsuariosController;
