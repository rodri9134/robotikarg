import { Request, Response } from 'express';
import pool from '../database';
const fs = require('fs');
class TorneosController {


    index(req: Request, res: Response) {
        res.json({ message: 'Estas en torneos' });
    }
    public async create(req: Request, res: Response) {/*
        fs.writeFile('/tmp/hello.txt', 'Hello world!', function(err: any) {
 
            if(err) return console.error(err);
          
          });
          
          
          const buffer = new Buffer([ 0x48, 0x65, 0x6c, 0x6c, 0x6f ]);
          fs.writeFile(req.body.imagen, buffer, function(err: any) {
            // If an error occurred, show it and return
            if(err) return console.error(err);
            // Successfully wrote binary contents to the file!
          });*/
        await pool.query('INSERT INTO torneos SET ?', [req.body]);
        res.json({ message: 'El torneo ha sido creado' });

    }

    // public async read(req: Request, res: Response) {
    //     const torneos = await pool.query('SELECT * FROM torneos', [req.body]);
    //     res.json(torneos);
    // }
     public async read(req: Request, res: Response) {
        // tslint:disable-next-line: max-line-length
        const torneos = await pool.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id ORDER BY torneos.fecha', [req.body]);
        res.json(torneos);
    }
    public async update(req: Request, res: Response) {

        await pool.query('UPDATE torneos SET ? WHERE id=?', [req.params.id]);

    }
    public async delete(req: Request, res: Response) {

        await pool.query('DELETE FROM torneos WHERE id=?', [req.params.id]);
    }
    public async readone(req: Request, res: Response) {

        const torneos = await pool.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id WHERE torneos.id=? ORDER BY torneos.fecha ', [req.params.id]);
        res.json(torneos);
    }
    public async rangoEdad(req: Request, res: Response) {

        const rangoEdad = await pool.query('SELECT * FROM rangoedad', [req.body]);
        res.json(rangoEdad);
    }
    public async provincias(req: Request, res: Response) {

        const provincias = await pool.query('SELECT * FROM provincias WHERE id=?', [req.body]);
        res.json(provincias);
    }
    public async torneosProvincia(req: Request, res: Response) {

        const torneos = await pool.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id WHERE torneos.idprovincia=? ORDER BY torneos.fecha', [req.params.id]);
        res.json(torneos);
    }
    public async torneosEdad(req: Request, res: Response) {
    console.log('Id Edad '+req.params.id);
        const torneos = await pool.query('SELECT torneos.*,provincias.nombre AS pNombre, rangoedad.tiporango AS rEdad FROM torneos INNER JOIN provincias ON torneos.idProvincia=provincias.id INNER JOIN rangoedad ON torneos.idRangoEdad=rangoedad.id WHERE torneos.idrangoedad=? ORDER BY torneos.fecha', [req.params.id]);
        res.json(torneos);
    }
}

// tslint:disable-next-line: new-parens
export const torneosController = new TorneosController;
