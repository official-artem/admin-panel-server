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
    WHERE id = $1
  `, [id]);

  return result.rows[0] || null;
};

export const update = async (id, user) => {
  const {name, surname, number, country, height, weight} = user;

  await client.query(`
    UPDATE users
    SET 
      name=$1,
      surname=$2,
      number=$3,
      country=$4,
      height=$5,
      weight=$6
    WHERE id = '${id}'
    `, [name, surname, number, country, height, weight]);

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
  const generatedId = uuidv4();

   await client.query(`
  INSERT INTO users (id, name, surname, number, country, height, weight)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  `, [generatedId, name, surname, number, country, height, weight])

  return await getById(generatedId);
}