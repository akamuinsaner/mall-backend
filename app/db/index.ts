import { Client, Connection } from 'pg';

export default async (
    database: string,
) => {
    const connectionConfig = {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    };

    const conn: Connection = new Client({
        ...connectionConfig,
        database,
    });

    await conn.connect();

    return {
        execute: (sql: string, values?: any[]) => new Promise((resolve, reject) => {
            try {
                conn.query(sql, values, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                    conn.end();
                });
            } catch (e) {
                console.error(e);
                reject(e);
            }
        }),
    };
};

