import mysql from 'promise-mysql';
import conexion from './conexion';
const pool = mysql.createPool(conexion.database);
pool.getConnection().then(Connection => {
    pool.releaseConnection(Connection);
    console.log("la base de datos esta conectada");
});
export default pool;
//# sourceMappingURL=database.js.map