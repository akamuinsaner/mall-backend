import * as express from 'express';
import connection from './connector';

const app = express();


app.get('/', (req, res) => {
    connection(
        `
            select * from user_tb
        `,
        [],
    ).then(data => {
        res.send(data.rows);
    });
});
app.post('/user', () => {

});


app.listen(7000, () => {
    console.log('Example app listening on port 3000!');
});