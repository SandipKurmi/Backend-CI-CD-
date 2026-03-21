import mysql from 'mysql2/promise';
import { Config } from './index';

export const pool = mysql.createPool({
    host: Config.dbHost,
    user: Config.dbUser,
    password: Config.dbPassword,
    database: Config.dbName,
});
