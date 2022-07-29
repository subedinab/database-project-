const express = require("express");
const router = express.Router();
const supplierController = require("../controller/suppliercontroller");
router
  .route("/")
  .get(supplierController.getsupplier)
  .post(supplierController.postsupplier);

router
  .route("/:id")
  .get(supplierController.getsupplierById)
  .delete(supplierController.deletesupplier)
  .patch(supplierController.updatesupplier);
// res.status(200).send("the server is running sussessfully");
module.exports = router;
