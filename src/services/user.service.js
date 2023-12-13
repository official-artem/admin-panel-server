import pkg from 'pg';
const { Client } = pkg;
import 'dotenv/config';
import { v4 as uuidv4 } from 'uuid';

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

export const update = async (id, user) => {
  const {name, surname, number, country, height, weight} = user;

  await client.query(`
    UPDATE users
    SET 
      name='${name}',
      surname='${surname}',
      number='${number}',
      country='${country}',
      height='${height}',
      weight='${weight}'
    WHERE id = '${id}'
    `);

  return await getById(id);
}

export const create = async (
  name,
  surname,
  number,
  country,
  height,
  weight
) => {
  const newId = uuidv4();

   await client.query(`
  INSERT INTO users (id, name, surname, number, country, height, weight)
  VALUES ('${newId}', '${name}', '${surname}', '${number}', '${country}', '${height}', '${weight}')
  `)

  return await getById(newId);
}