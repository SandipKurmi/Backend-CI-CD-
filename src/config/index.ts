import { config } from 'dotenv';

config();

const { NODE_ENV, PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, NODE_HOST } =
    process.env;

export const Config = {
    env: NODE_ENV,
    port: PORT,
    dbHost: DB_HOST,
    dbUser: DB_USER,
    dbPassword: DB_PASSWORD,
    dbName: DB_NAME,
    nodeHost: NODE_HOST,
};
