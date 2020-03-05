"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import App from './controladores/app';
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const torneosRoutes_1 = __importDefault(require("./routes/torneosRoutes"));
const instruccionesRoutes_1 = __importDefault(require("./routes/instruccionesRoutes"));
const articulosRoutes_1 = __importDefault(require("./routes/articulosRoutes"));
const instruccionesUsuarioRoutes_1 = __importDefault(require("./routes/instruccionesUsuarioRoutes"));
const lenguajesRoutes_1 = __importDefault(require("./routes/lenguajesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        //  this.app.use('/formulario',App);
        this.app.use('/usuarios', usuariosRoutes_1.default);
        this.app.use('/torneos', torneosRoutes_1.default);
        this.app.use('/instrucciones', instruccionesRoutes_1.default);
        this.app.use('/articulos', articulosRoutes_1.default);
        this.app.use('/lenguajes', lenguajesRoutes_1.default);
        this.app.use('/instruccionesUsuario', instruccionesUsuarioRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => console.log('El servidor está escuchando en el puerto ', this.app.get('port')));
    }
}
const serve = new server();
serve.start();
console.log("Estoy transpilando");
console.log("Hola mundo. Robotikarg");
