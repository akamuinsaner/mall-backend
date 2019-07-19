import * as express from 'express';
import * as routes from './routes';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as logger from './logger';

dotenv.config({ path: path.resolve(process.cwd(), 'config') });

const app = express();

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
});

logger.use(app, 'info');

routes.use(app);

app.listen(7000, () => {
    console.log('Example app listening on port 7000!');
});
