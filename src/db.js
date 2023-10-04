const { Pool } = require(`pg`);

const pool = new Pool({
  host: 'localhost',
  port: `5432`,
  password: "ig123456789",
  database: `authform`,
  user: `postgres`
});

module.exports = { pool };
