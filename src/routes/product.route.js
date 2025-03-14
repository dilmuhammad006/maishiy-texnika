const { Router } = require("express");
const { getAllProducts } = require("../controllers/product.controller");

const productRoute = Router()

productRoute.get("/products", getAllProducts)

module.exports = productRoute