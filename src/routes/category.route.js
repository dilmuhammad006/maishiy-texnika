const { Router } = require("express");
const {
  getAllCategory,
  getCategoryById,
  addCategory,
  deleteCategory,
} = require("../controllers/category.controller");

const categoryRoute = Router();

categoryRoute
  .get("/category", getAllCategory)
  .get("/category/:id", getCategoryById)
  .post("/category", addCategory)
  .delete("/category/:id", deleteCategory);

module.exports = categoryRoute;
