const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const productRoutes = require("./routes/productroute");
const productCatRoutes = require("./routes/productTypeRoute");
const cartroute = require("./routes/cartroute");
const supplierroute = require("./routes/supplierroute");
const userroute = require("./routes/userroute");
const login = require("./login");

//

// const renderProduct = require("./routes/ServerRender/productRoutes");
//Cookies

app.use(
  cookieSession({
    keys: ["jsklkdjsak"],
  })
);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
// app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// Server Routes
app.use("/", login);
app.use("/product", productRoutes);
app.use("/productcat", productCatRoutes);
app.use("/cart", cartroute);
app.use("/supplier", supplierroute);
app.use("/user", userroute);
app.get("/login", (req, res) => {
  res.render("login");
});

// Clients Routes
// app.use("/product", renderProduct);
app.get("*", (req, res) => {
  res.send("h1>404 Not found<h1>");
});

app.listen(3000, () => {
  console.log("the server is listening to the port 3000");
});
