const user = require("../Model/usermodal");

exports.getuser = async (req, res) => {
  const response = await user.getAllData();
  // console.log(response);
  res.render("user", { response });
};

exports.getuserById = async (req, res) => {
  const response = await user.getById(req.params.id);
  console.log(response);
  res.render("user", { response: response[0] });
};
exports.postuser = async (req, res) => {
  try {
    const response = await user.insertData(req.body);
    res.redirect("/user");
  } catch (err) {
    res.json({ msg: err.message });
  }
};

exports.deleteuser = async (req, res) => {
  console.log(req.params.id);
  const userData = await user.getById(req.params.id);

  if (userData) {
    await user.deleteDataById(req.params.id);
    console.log(req.params.id);
    res.redirect("/user");
  } else {
    res.json({ msg: "Not Found" });
  }
};
exports.updateuser = async (req, res) => {
  const userData = await user.getById(req.params.id);
  if (userData) {
    const response = await user.updateDataById(req.params.id, req.body);
    return res.json({ res: response });
  }
  res.json({ msg: "Updated" });
};
