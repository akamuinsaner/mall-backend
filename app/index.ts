import * as express from 'express';
import * as routes from './routes';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as logger from './logger';

dotenv.config({ path: path.resolve(process.cwd(), 'config') });

const app = express();

logger.use(app, 'info');

routes.use(app);

app.listen(7000, () => {
    console.log('Example app listening on port 7000!');
});
