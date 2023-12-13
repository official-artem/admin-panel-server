import pkg from 'pg';
const { Client } = pkg;
import 'dotenv/config';


const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

await client.connect()

const result = await client.query(`
SELECT * FROM users
`)

console.log(result.rows);