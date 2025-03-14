const { Router } = require("express");
const {
  getAllProducts,
  addProduct,
} = require("../controllers/product.controller");

const productRoute = Router();

productRoute.get("/products", getAllProducts).post("/products", addProduct);

module.exports = productRoute;
