"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class InstruccionesUsuarioController {
    index(req, res) {
        res.json({ message: 'Estas en instrucciones' });
    }
    // Mostrar las instrucciones del usuario
    instruccionesUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // tslint:disable-next-line: max-line-length
            const misInstrucciones = yield database_1.default.query('SELECT iu.id AS idInstruccionUsuario,i.id,i.instruccion,i.accion,l.nombre as nombreLenguaje FROM instrucciones i INNER JOIN instrucciones_usuarios iu ON iu.idInstruccion=i.id INNER JOIN usuarios u ON iu.idUsuario=u.id INNER JOIN lenguajes l ON l.id=i.idLenguaje WHERE u.id=?', [req.params.id]);
            res.json(misInstrucciones);
        });
    }
    // Guardar las instrucciones que le gusten al usuario
    guardarInstruccionUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO instrucciones_usuarios SET ?', [req.body]);
            res.json({ message: 'Tu instrucción elegida, ha sido guardada' });
        });
    }
    //Eliminar instrucciones usuario
    eliminarInstruccionUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM instrucciones_usuarios WHERE id= ?', [req.params.id]);
            res.json({ message: 'Instruccion eliminada' });
        });
    }
}
exports.instruccionesUsuarioController = new InstruccionesUsuarioController;
