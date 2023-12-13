import pkg from 'pg';
const { Client } = pkg;
import 'dotenv/config';

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

await client.connect();

export const getAll = async () => {
  const result = await client.query(`
    SELECT * FROM users
  `);

  return result.rows;
};

export const getById = async (id) => {
  const result = await client.query(`
    SELECT * FROM users
    WHERE id = '${id}'
  `);

  return result.rows[0] || null;
};