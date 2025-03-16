const { config } = require("dotenv");
const { Pool } = require("pg");

config();

const pool = new Pool({
  host: process.env.db_host,
  port: +process.env.db_port,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
});

async function query(queryStr, params = []) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(
      queryStr,
      params.length ? params : null
    );
    return rows;
  } catch (error) {
    console.log(`database error: ${error.message}`);
  } finally {
    client.release();
  }
}

module.exports = query;