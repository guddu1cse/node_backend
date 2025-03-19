import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@1112',
    database: 'backend_api',
    port: 3306,
    connectionLimit: 10,
});


const promisePool = pool.promise();

export default promisePool;
