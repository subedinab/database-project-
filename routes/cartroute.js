const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartcontroller");
router.route("/").get(cartController.getcart).post(cartController.postcart);

router
  .route("/:id")
  .get(cartController.getcartById)
  .delete(cartController.deletecart)
  .patch(cartController.updatecart);
// res.status(200).send("the server is running sussessfully");
module.exports = router;
