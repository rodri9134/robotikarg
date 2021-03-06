import { Request, Response } from 'express';
import pool from '../database';
class InstruccionesController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en instrucciones' });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO instrucciones SET ?', [req.body]);
        res.json({ message: 'La instruccion ha sido creada' });

    }

    public async read(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const instrucciones = await pool.query('SELECT i.*,l.nombre AS lenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id ORDER BY l.nombre', [req.body]);
        res.json(instrucciones);
    }
    public async readLenguaje(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const instrucciones = await pool.query('SELECT i.*,l.nombre AS lenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id WHERE i.idLenguaje=? ORDER BY l.nombre', [req.params.id]);
        res.json(instrucciones);
    }
    public async leerInstruccion(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const instrucciones = await pool.query('SELECT i.*,l.nombre AS nombrelenguaje FROM instrucciones i INNER JOIN lenguajes l ON i.idLenguaje=l.id  WHERE i.id=?', [req.params.id]);
        res.json(instrucciones);
    }
    public async update(req: Request, res: Response) {

        const id = req.params.id;
        req.body.id = id;
        await pool.query('UPDATE instrucciones SET ? WHERE id=?', [req.body, req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM instrucciones WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const instrucciones = await pool.query('SELECT * FROM instrucciones WHERE id=?', [req.params.id]);
        res.json(instrucciones);
    }
    public async instruccionesUsuario(req: Request, res: Response) {

        // tslint:disable-next-line: max-line-length
        const misInstrucciones = await pool.query('SELECT iu.id AS idInstruccionUsuario,i.id,i.instruccion,i.accion,l.nombre as nombreLenguaje FROM instrucciones i INNER JOIN instrucciones_usuarios iu ON iu.idInstruccion=i.id INNER JOIN usuarios u ON iu.idUsuario=u.id INNER JOIN lenguajes l ON l.id=i.idLenguaje WHERE u.id=?', [req.params.id]);
        res.json(misInstrucciones);
    }
    public async guardarInstrucciones(req: Request, res: Response) {

        await pool.query('INSERT INTO instrucciones_usuarios SET ?', [req.body]);
        res.json({ message: 'Tu instrucción ha sido añadida' });
    }
}

export const instruccionesController = new InstruccionesController;
