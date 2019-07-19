import connect from '../db';

export const list = async (req, res) => {
    const connector = await connect('postgres');
    const data = await connector.execute(
        `select * from animal`,
    );
    res.send(data);
};
