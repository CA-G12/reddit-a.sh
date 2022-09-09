const { Pool } = require('pg');
require('dotenv').config();

const {
  NODE_ENV, DATABASE_URL, DB_URL, BD_TEST_URL,
} = process.env;

let dbUrl = '';
let ssl = false;

switch (NODE_ENV) {
  case 'dev':
    dbUrl = DB_URL;
    break;
  case 'test':
    dbUrl = BD_TEST_URL;
    break;
  case 'production':
    dbUrl = DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;

  default:
    throw new Error('invalid db url');
}

const connection = new Pool({
  dbUrl,
  ssl,
});

module.exports = connection;
