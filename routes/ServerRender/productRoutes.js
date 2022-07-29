const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("productList");
});
// res.status(200).send("the server is running sussessfully");
module.exports = router;
