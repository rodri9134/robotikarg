import { Request, Response } from 'express';
import pool from '../database';
class TorneosController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en torneos' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO torneos SET ?', [req.body]);
        res.json({ message: 'El torneo ha sido creado' });

    }

    // public async read(req: Request, res: Response) {
    //     const torneos = await pool.query('SELECT * FROM torneos', [req.body]);
    //     res.json(torneos);
    // }
     public async read(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const torneos = await pool.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id', [req.body]);
        res.json(torneos);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE torneos SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM torneos WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const torneos = await pool.query('SELECT * FROM torneos WHERE id=?', [req.params.id]);
        res.json(torneos);
    }
}

// tslint:disable-next-line: new-parens
export const torneosController = new TorneosController;
