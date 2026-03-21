import express from 'express';
import { Request, Response, NextFunction } from 'express';
import path from 'path';
import logger from './config/logger';
import { HttpError } from 'http-errors';
import { pool } from './config/db';
import { Config } from './config';

const app = express();

// EJS view engine — views/ folder at project root
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, title, description FROM posts',
        );
        res.render('index', {
            blogs: rows,
            version: 'v1',
            host: Config.nodeHost ?? 'unknown',
        });
    } catch (err) {
        logger.error(err);
        res.status(500).send('DB error');
    }
});

app.get('/health', (req: Request, res: Response) => {
    logger.info('Health check');
    res.status(200).json({ alive: true });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
