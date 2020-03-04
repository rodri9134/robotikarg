import { Request, Response } from 'express';
import pool from '../database';
class LenguajesController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en lenguajes' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO lenguajes SET ?', [req.body]);
        res.json({ message: 'El lenguaje ha sido creado' });

    }
    public async read(req: Request, res: Response) {
        const articulos = await pool.query('SELECT l.* FROM lenguajes l', [req.body]);
        res.json(articulos);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE lenguajes SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM lenguajes WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const lenguajes = await pool.query('SELECT l.* FROM lenguajes WHERE id=?', [req.params.id]);
        res.json(lenguajes);
    }
}

export const lenguajesController = new LenguajesController;