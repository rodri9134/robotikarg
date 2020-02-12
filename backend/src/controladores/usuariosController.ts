import { Request, Response } from 'express';
import pool from '../database';
const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');
const SECRET_KEY = 'miClaveSecreta';
class UsuariosController {
    index(req: Request, res: Response) {
        res.json({ 'message': 'Estas en usuarios' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO usuarios SET ?', [req.body]);
        res.json({ 'message': 'El usuario ha sido creado' });

    }


    public async read(req: Request, res: Response) {
        const usuarios = await pool.query('SELECT * FROM usuarios', [req.body]);
        res.json(usuarios);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE usuarios SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM usuarios WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const usuarios = await pool.query('SELECT * FROM usuarios WHERE id=?', [req.params.id]);
        res.json(usuarios);
    }



    public async readLogin(req: Request, res: Response) {
        // console.log(req.body);
        const copiaUsuario = {
            email: req.body.email,
            password: req.body.password
        };
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [req.body.email, req.body.password]);
        console.log(usuarios.length);
        if (usuarios.length == 0) {

            res.json({ message: "Error al loguearse" });
        }
        else {
             res.json({ message: "Credenciales válidas" });
            // res.json(usuarios);
            const expiraen = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: copiaUsuario.email }, SECRET_KEY, { expiresIn: expiraen });
            console.log("access token "+accessToken);
            res.json(accessToken);

        }
        //   res.json(usuarios);
    }
}

export const usuariosController = new UsuariosController;