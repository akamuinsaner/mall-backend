import * as express from 'express';
import routes from './routes';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), 'config') });

const app = express();

routes(app);

app.listen(7000, () => {
    console.log('Example app listening on port 7000!');
});
