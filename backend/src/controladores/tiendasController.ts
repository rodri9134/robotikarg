import { Request, Response } from 'express';
import pool from '../database';
class TiendasController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en tiendas' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO tiendas SET ?', [req.body]);
        res.json({ message: 'La tiendas ha sido creada' });

    }
     public async read(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const tiendas = await pool.query('SELECT tiendas.* FROM tiendas', [req.body]);
        res.json(tiendas);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE tiendas SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM tiendas WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const tiendas = await pool.query('SELECT * FROM tiendas WHERE id=?', [req.params.id]);
        res.json(tiendas);
    }
}

// tslint:disable-next-line: new-parens
export const tiendasController = new TiendasController;
