const cart = require("../Model/cartmodal");

exports.getcart = async (req, res) => {
  const response = await cart.getAllData();
  // console.log(response);
  res.render("cart", { response });
};

exports.getcartById = async (req, res) => {
  const response = await cart.getById(req.params.id);
  console.log(response);
  res.render("cart", { response: response[0] });
};
exports.postcart = async (req, res) => {
  try {
    if (!req.session.isLoggedIn) res.redirect("/login");
    const isExist = await cart.findData(req.body.product_id);
    if (isExist.length > 0) {
      const quantity = isExist[0].quantity + +req.body.quantity;
      await cart.updateDataById(isExist[0].id, { quantity });
      return res.redirect("/cart");
    }

    // console.log(req.session);
    req.body.user_id = req.session.user[0].id;
    await cart.insertData(req.body);
    res.redirect("/cart");
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.deletecart = async (req, res) => {
  const productData = await cart.getById(req.params.id);
  if (cartData) {
    await cart.deleteDataById(req.params.id);
    console.log(req.params.id);
    res.redirect("/cart");
  } else {
    res.json({ msg: "Not Found" });
  }
};
exports.updatecart = async (req, res) => {
  const cartData = await cart.getById(req.params.id);
  if (cartData) {
    const response = await cart.updateDataById(req.params.id, req.body);
    return res.json({ res: response });
  }
  res.json({ msg: "Updated" });
};
