import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    const PORT = Config.port;

    try {
        app.listen(PORT, () => logger.info(`Listnig on Port ${PORT}`));
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);

            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
};

startServer();
