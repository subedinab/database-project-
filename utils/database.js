const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  database: "ecommerce",
  password: "ecommerce",
});

pool.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + pool.threadId);
});
module.exports = pool.promise();
