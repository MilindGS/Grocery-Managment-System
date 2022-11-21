const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 20,
  user: "root",
  password: "manager",
  database: "gms_db",
  port: 3306,
  host: "localhost",
});

module.exports = {
  pool,
};
