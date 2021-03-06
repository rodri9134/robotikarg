import { Request, Response } from 'express';
import pool from '../database';
class ArticulosController {
index(req: Request, res: Response) {
res.json({ message: 'Estas en articulos' });
}
public async create(req: Request, res: Response) {
await pool.query('INSERT INTO articulos SET ?', [req.body]);
res.json({ message: 'El articulos ha sido creado' });

}
public async read(req: Request, res: Response) {
// tslint:disable-next-line: max-line-length
const articulos = await pool.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id ORDER BY t.nombre,c.nombre', [req.body]);
res.json(articulos);
}
public async update(req: Request, res: Response) {

await pool.query('UPDATE articulos SET ? WHERE id=?', [req.body, req.params.id]);

}
public async delete(req: Request, res: Response) {

await pool.query('DELETE FROM articulos WHERE id=?', [req.params.id]);
}
public async readone(req: Request, res: Response) {

const articulos = await pool.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id  WHERE a.id=?', [req.params.id]);
res.json(articulos);
}
public async articulosCategoria(req: Request, res: Response) {

    const articulos = await pool.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id WHERE idCategoria=? ORDER BY t.nombre,c.nombre', [req.params.id]);
    res.json(articulos);
}
public async articulosTienda(req: Request, res: Response) {

    const articulos = await pool.query('SELECT a.*,c.nombre AS categoria,t.nombre AS tienda FROM articulos a INNER JOIN categorias c ON a.idCategoria=c.id INNER JOIN tiendas t ON a.idTienda=t.id  WHERE idTienda=? ORDER BY t.nombre,c.nombre', [req.params.id]);
    res.json(articulos);
}
}

export const articulosController = new ArticulosController;