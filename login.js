const mysql = require("mysql2");
const express = require("express");
const connection = require("./utils/database");
const router = express.Router();

// http://localhost:3000/

// http://localhost:3000/auth
router.post("/auth", async function (req, res) {
  // Capture the input fields
  console.log(req.body);
  let username = req.body.username;
  let password = req.body.password;

  // Ensure the input fields exists and are not empty

  // Execute SQL query that'll select the account from the database based on the specified username and password
  const hasUser = await connection.query(
    "SELECT * FROM user WHERE name = ? AND password = ?",
    [username, password]
  );
  if (hasUser[0].length != 0) {
    req.session.user = hasUser[0];
    req.session.isLoggedIn = true;
    console.log(req.session);
    return res.redirect("/");
  } else res.send("<h1>Incorrect Username or password</h1>");
});

// http://localhost:3000/home
router.get("/", async function (req, res) {
  const products = await connection.query("SELECT * FROM product");
  res.render("Home", { products: products[0] });
});
module.exports = router;
