const { config } = require("dotenv");
const express = require("express");
const { join } = require("node:path");
const productRoute = require("./routes/product.route");
const categoryRoute = require("./routes/category.route");

const app = express();
config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "src", "views"));

app.use("/api/v1", productRoute);
app.use("/api/v1", categoryRoute)

app.listen(+process.env.APP_PORT, () => {
  console.log(`http://localhost/${process.env.APP_PORT}`);
});
