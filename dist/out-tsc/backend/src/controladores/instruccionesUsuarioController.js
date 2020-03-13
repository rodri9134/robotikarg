import { __awaiter } from "tslib";
import pool from '../database';
class InstruccionesUsuarioController {
    index(req, res) {
        res.json({ message: 'Estas en instrucciones' });
    }
    // Mostrar las instrucciones del usuario
    instruccionesUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const misInstrucciones = yield pool.query('SELECT iu.id AS idInstruccionUsuario,i.id,i.instruccion,i.accion,l.nombre as nombreLenguaje FROM instrucciones i INNER JOIN instrucciones_usuarios iu ON iu.idInstruccion=i.id INNER JOIN usuarios u ON iu.idUsuario=u.id INNER JOIN lenguajes l ON l.id=i.idLenguaje WHERE u.id=?', [req.params.id]);
            res.json(misInstrucciones);
        });
    }
    // Guardar las instrucciones que le gusten al usuario
    guardarInstruccionUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Req body idUsuario ' + req.body.idUsuario);
            console.log('Req body idInstruccion ' + req.body.idInstruccion);
            yield pool.query('INSERT INTO instrucciones_usuarios SET ?', [req.body]);
            res.json({ message: 'Tu instrucción elegida, ha sido guardada' });
        });
    }
    //Eliminar instrucciones usuario
    eliminarInstruccionUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Eliminar INSTRUCCIONusuario.id " + req.params.id);
            yield pool.query('DELETE FROM instrucciones_usuarios WHERE id= ?', [req.params.id]);
            res.json({ message: 'Instruccion eliminada' });
        });
    }
}
export const instruccionesUsuarioController = new InstruccionesUsuarioController;
//# sourceMappingURL=instruccionesUsuarioController.js.map