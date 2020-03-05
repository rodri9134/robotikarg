import { Request, Response } from 'express';
import pool from '../database';
class InstruccionesUsuarioController {
    index(req: Request, res: Response) {
        res.json({ message: 'Estas en instrucciones' });
    }
   // Mostrar las instrucciones del usuario
    public async instruccionesUsuario(req: Request, res: Response) {

        // tslint:disable-next-line: max-line-length
        const misInstrucciones = await pool.query('SELECT iu.id AS idInstruccionUsuario,i.id,i.instruccion,i.accion,l.nombre as nombreLenguaje FROM instrucciones i INNER JOIN instrucciones_usuarios iu ON iu.idInstruccion=i.id INNER JOIN usuarios u ON iu.idUsuario=u.id INNER JOIN lenguajes l ON l.id=i.idLenguaje WHERE u.id=?' , [req.params.id]);
        res.json(misInstrucciones);
    }
    // Guardar las instrucciones que le gusten al usuario
    public async guardarInstruccionUsuario(req: Request, res: Response) {
        console.log('Req body idUsuario '+req.body.idUsuario);
        console.log('Req body idInstruccion '+req.body.idInstruccion);

        await pool.query('INSERT INTO instrucciones_usuarios SET ?', [req.body]);
        res.json({ message: 'Tu instrucción elegida, ha sido guardada' });
    }
    //Eliminar instrucciones usuario
    public async eliminarInstruccionUsuario(req:Request, res:Response){
        console.log("Eliminar INSTRUCCIONusuario.id "+req.params.id);
        await pool.query('DELETE FROM instrucciones_usuarios WHERE id= ?',[req.params.id]);
        res.json({message: 'Instruccion eliminada'});
    }
}

export const instruccionesUsuarioController = new InstruccionesUsuarioController;
