import { Client } from 'pg';
import {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_PORT,
} from '../env/environment';

export async function setupDatabase(): Promise<void> {
  const client = new Client({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    port: DB_PORT,
  });

  await client.connect();

  const res = await client.query(
    `SELECT datname FROM pg_catalog.pg_database WHERE datname = '${DB_NAME}'`,
  );

  if (res.rowCount === 0) {
    await client.query(`CREATE DATABASE "${DB_NAME}";`);
  }

  await client.end();
}
