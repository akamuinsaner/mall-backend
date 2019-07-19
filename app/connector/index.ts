import { Client, Connection } from 'pg';



const connMap = new Map<string, Connection>();

export default async (
    database: string,
) => {
    if (!connMap.get(database)) {
        const connectionConfig = {
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
        };
        connMap.set(database, new Client({
            ...connectionConfig,
            database,
        }));
    }
    const conn = connMap.get(database);
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
        destroy: () => {
            connMap.delete(database);
            conn.destroy();
        },
    };
};

