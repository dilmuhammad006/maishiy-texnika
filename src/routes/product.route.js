const { Router } = require("express");
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/product.controller");

const productRoute = Router();

productRoute
  .get("/products", getAllProducts)
  .get("/products/:id", getProductById)
  .post("/products", addProduct)
  .delete("/products/:id", deleteProduct);

module.exports = productRoute;
