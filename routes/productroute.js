// /product
// /product/:id/details
// /addCart
// /cart
// /category
// /category/product
// /buy

// / ( cookie?"/product":"login"?"login":"regester")

// /regester >= home

// req.cookies.user{
// name
// id
// cart

// }

const express = require("express");
const router = express.Router();
const productController = require("../controller/productcontroller");
router
  .route("/")
  .get(productController.getProduct)
  .post(productController.postProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .delete(productController.deleteProduct)
  .patch(productController.updateProduct);
// res.status(200).send("the server is running sussessfully");
module.exports = router;
