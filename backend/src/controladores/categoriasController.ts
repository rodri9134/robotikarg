import { Request, Response } from 'express';
import pool from '../database';
class CategoriasController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en categorias' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO categorias SET ?', [req.body]);
        res.json({ message: 'La categoria ha sido creada' });

    }

     public async read(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const torneos = await pool.query('SELECT * FROM categorias', [req.body]);
        res.json(torneos);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE categorias SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM categorias WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const categorias = await pool.query('SELECT * FROM categorias WHERE id=?', [req.params.id]);
        res.json(categorias);
    }
}

// tslint:disable-next-line: new-parens
export const categoriasController = new CategoriasController;
