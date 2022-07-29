const producttype = require("../Model/productTypModel");

exports.getproducttype = async (req, res) => {
  const response = await producttype.getAllData();
  console.log(response);
  res.render("productcategory", { response });
};

exports.getproducttypeById = async (req, res) => {
  const response = await producttype.getById(req.params.id);
  console.log(response);
  res.render("producttypeDetails", { response: response[0] });
};
exports.postproducttype = async (req, res) => {
  try {
    const response = await producttype.insertData(req.body);
    res.redirect("/productcategory");
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.deleteproducttype = async (req, res) => {
  const producttypeData = await producttype.getById(req.params.id);
  if (producttypeData) {
    await producttype.deleteDataById(req.params.id);
    console.log(req.params.id);
    res.redirect("/productcategory");
  } else {
    res.json({ msg: "Not Found" });
  }
};
exports.updateproducttype = async (req, res) => {
  const producttypeData = await producttype.getById(req.params.id);
  if (producttypeData) {
    const response = await producttype.updateDataById(req.params.id, req.body);
    return res.json({ res: response });
  }
  res.json({ msg: "Updated" });
};
