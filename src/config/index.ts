import { config } from 'dotenv';

config();

const { NODE_ENV, PORT } = process.env;

export const Config = {
    env: NODE_ENV,
    port: PORT,
};
