import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'attendance-app',
    password: 'admin',
    port: 5432,
    idleTimeoutMillis: 30000,
})

// Client Manager
export const newClient = async () => {
    const client = await pool.connect();
    await client.query('BEGIN');
    return client;
}
export const commitClient = async (client) => {
    await client.query('COMMIT');
    client.release();
}
export const rollbackClient = async (client) => {
    await client.query('ROLLBACK');
    client.release();
}

// Query executor
export const execQuery = async(textQuery, values) => {
    const result = await pool.query(textQuery, values);
    return result.rows;
};