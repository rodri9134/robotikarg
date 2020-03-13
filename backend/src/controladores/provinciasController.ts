import { Request, Response } from 'express';
import pool from '../database';
class ProvinciasController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en provincias' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO provincias SET ?', [req.body]);
        res.json({ message: 'La provincia ha sido creada' });

    }
     public async read(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const provincias = await pool.query('SELECT provincias.* FROM provincias', [req.body]);
        res.json(provincias);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE provincias SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM provincias WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const provincias = await pool.query('SELECT * FROM provincias WHERE id=?', [req.params.id]);
        res.json(provincias);
    }
}

// tslint:disable-next-line: new-parens
export const provinciasController = new ProvinciasController;
