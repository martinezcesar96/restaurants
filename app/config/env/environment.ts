import * as dotenv from 'dotenv';
import * as assert from 'assert';

dotenv.config();

assert.ok(process.env.APP_NAME, 'env [APP_NAME] is required');
assert.ok(process.env.APP_PORT, 'env [APP_PORT] is required');
assert.ok(process.env.DB_USER, 'env [DB_USER] is required');
assert.ok(process.env.DB_PASS, 'env [DB_PASS] is required');
assert.ok(process.env.DB_HOST, 'env [DB_HOST] is required');
assert.ok(process.env.DB_PORT, 'env [DB_PORT] is required');
assert.ok(process.env.DB_NAME, 'env [DB_NAME] is required');

export const ENV = process.env.ENV;
export const APP_NAME = process.env.APP_NAME;
export const APP_PORT = Number(process.env.APP_PORT);
export const DB_USER = process.env.DB_USER;
export const DB_PASS = process.env.DB_PASS;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = Number(process.env.DB_PORT);
export const DB_NAME = process.env.DB_NAME;
