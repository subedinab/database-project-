const supplier = require("../Model/suppliermodal");

exports.getsupplier = async (req, res) => {
  const response = await supplier.getAllData();
  // console.log(response);
  res.render("supplier", { response });
};

exports.getsupplierById = async (req, res) => {
  const response = await supplier.getById(req.params.id);
  console.log(response);
  res.render("supplier", { response: response[0] });
};
exports.postsupplier = async (req, res) => {
  try {
    const response = await supplier.insertData(req.body);
    res.redirect("/supplier");
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.deletesupplier = async (req, res) => {
  console.log(req.params.id);
  const supplierData = await supplier.getById(req.params.id);

  if (supplierData) {
    await supplier.deleteDataById(req.params.id);
    console.log(req.params.id);
    res.redirect("/supplier");
  } else {
    res.json({ msg: "Not Found" });
  }
};
exports.updatesupplier = async (req, res) => {
  const supplierData = await supplier.getById(req.params.id);
  if (supplierData) {
    const response = await supplier.updateDataById(req.params.id, req.body);
    return res.json({ res: response });
  }
  res.json({ msg: "Updated" });
};
