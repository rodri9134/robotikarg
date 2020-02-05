import { Request, Response } from 'express';
import pool from '../database';
class InstruccionesController {
    index(req: Request, res: Response) {
        res.json({ 'message': 'Estas en instrucciones' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO instrucciones SET ?', [req.body]);
        res.json({ 'message': 'La instruccion ha sido creada' });

    }
    public async read(req: Request, res: Response) {
        const instrucciones = await pool.query('SELECT * FROM instrucciones', [req.body]);
        res.json(instrucciones);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE instrucciones SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM instrucciones WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const instrucciones = await pool.query('SELECT * FROM instrucciones WHERE id=?', [req.params.id]);
        res.json(instrucciones);
    }
}

export const instruccionesController = new InstruccionesController;