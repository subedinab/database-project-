const Product = require("../Model/productmodel");

exports.getProduct = async (req, res) => {
  const response = await Product.getAllData();
  console.log(req.session.isLoggedIn);
  console.log(req.session.user);
  // console.log(response);
  res.render("productList", { response });
};

exports.getProductById = async (req, res) => {
  const response = await Product.getById(req.params.id);
  // console.log(response);

  res.render("productDetails", {
    product: response[0],
  });
};
exports.postProduct = async (req, res) => {
  try {
    const response = await Product.insertData(req.body);
    res.redirect("/product");
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  console.log(req.params.id);
  const productData = await Product.getById(req.params.id);

  if (productData) {
    await Product.deleteDataById(req.params.id);
    console.log(req.params.id);
    res.redirect("/product");
  } else {
    res.json({ msg: "Not Found" });
  }
};
exports.updateProduct = async (req, res) => {
  const productData = await Product.getById(req.params.id);
  if (productData) {
    const response = await Product.updateDataById(req.params.id, req.body);
    return res.json({ res: response });
  }
  res.json({ msg: "Updated" });
};
