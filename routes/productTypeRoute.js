const express = require("express");
const router = express.Router();
const productTypeController = require("../controller/productTypeController");
router
  .route("/")
  .get(productTypeController.getproducttype)
  .post(productTypeController.postproducttype);

router
  .route("/:id")
  .get(productTypeController.getproducttypeById)
  .delete(productTypeController.deleteproducttype)
  .patch(productTypeController.updateproducttype);
// res.status(200).send("the server is running sussessfully");
module.exports = router;
