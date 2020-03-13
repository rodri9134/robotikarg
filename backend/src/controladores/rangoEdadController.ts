import { Request, Response } from 'express';
import pool from '../database';
class RangoEdadController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en rangoEdad' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO rangoedad SET ?', [req.body]);
        res.json({ message: 'El rango edad ha sido creado' });

    }
     public async read(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const rangoEdad = await pool.query('SELECT rangoedad.* FROM rangoedad', [req.body]);
        res.json(rangoEdad);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE rangoedad SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM rangoedad WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const rangoedad = await pool.query('SELECT * FROM rangoedad WHERE id=?', [req.params.id]);
        res.json(rangoedad);
    }
}

// tslint:disable-next-line: new-parens
export const rangoEdadController = new RangoEdadController;
