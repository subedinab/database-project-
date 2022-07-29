const express = require("express");
const router = express.Router();
const userController = require("../controller/usercontroller");
router.route("/").get(userController.getuser).post(userController.postuser);

router
  .route("/:id")
  .get(userController.getuserById)
  .delete(userController.deleteuser)
  .patch(userController.updateuser);
// res.status(200).send("the server is running sussessfully");
module.exports = router;
