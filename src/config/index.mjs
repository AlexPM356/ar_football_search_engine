import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const Pool = pg.Pool;
let pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PSW,
    port: process.env.DB_PORT,
    max: 5,
    connectionTimeoutMillis: 3000,
    idleTimeoutMillis: 5000
});

export default pool;