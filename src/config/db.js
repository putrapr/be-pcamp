require("dotenv").config();
const pg = require("pg");
// console.log(process.env.HOST);
const db = new pg.Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT
});

db.connect((err) => {
  if (err) console.log(err);
});

module.exports = db;