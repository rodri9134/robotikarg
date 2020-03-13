import express, { Application } from 'express';
// import App from './controladores/app';
import indexRoutes from './routes/indexRoutes';
import usuariosRoutes from './routes/usuariosRoutes';
import torneosRoutes from './routes/torneosRoutes';
import instruccionesRoutes from './routes/instruccionesRoutes';
import articulosRoutes from './routes/articulosRoutes';
import instruccionesUsuariosRoutes from './routes/instruccionesUsuarioRoutes';
import lenguajesRoutes from './routes/lenguajesRoutes';
import tiendasRoutes from './routes/tiendasRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import provinciasRoutes from './routes/provinciasRoutes';
import rangoEdadRoutes from './routes/rangoEdadRoutes';
import morgan from 'morgan';
import cors from 'cors';
class server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }
    routes(): void {

        this.app.use(indexRoutes);
      //  this.app.use('/formulario',App);
        this.app.use('/usuarios', usuariosRoutes);
        this.app.use('/torneos', torneosRoutes);
        this.app.use('/instrucciones', instruccionesRoutes);
        this.app.use('/articulos', articulosRoutes);
        this.app.use('/lenguajes',lenguajesRoutes);
        this.app.use('/instruccionesUsuario',instruccionesUsuariosRoutes);
        this.app.use('/tiendas',tiendasRoutes);
        this.app.use('/categorias',categoriasRoutes);
        this.app.use('/provincias',provinciasRoutes);
        this.app.use('/rangoEdad',rangoEdadRoutes);
    }
    start(): void {
        this.app.listen(this.app.get('port'), () => console.log('El servidor está escuchando en el puerto ', this.app.get('port')));
    }
}
const serve = new server();
serve.start();
console.log("Estoy transpilando");
console.log("Hola mundo. Robotikarg");