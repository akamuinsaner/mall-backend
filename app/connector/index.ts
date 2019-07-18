import * as pg from 'pg';

export default async (
    query,
    params: any[],
) => {
    const client =  new pg.Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '123456',
        port: 8989,
    });
    await client.connect();
    const res = await client.query(query, params);
    await client.end();
    return res;
}

