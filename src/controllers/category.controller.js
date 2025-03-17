const query = require("../database/pg");

exports.getAllCategory = async function (_, res) {
  try {
    const category = await query(`SELECT json_agg(
    json_build_object(
        'product_id', product.id,
        'product_name', product.name,
        'price', product.price,
        'count', product.count,
        'category_name', category.name
    )
) AS categories
FROM product
INNER JOIN category ON product.category_id = category.id;

`);
    res.status(200).json(category);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCategoryById = async function (req, res) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send({
        message: "ID must be a number!",
      });
    }
    const category = await query(`select  * from category where id = ${id}`);
    if (!category || category.length == 0) {
      return res.status(404).send({
        message: "Given id not found!",
      });
    }
    res.status(200).json(category);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addCategory = async function (req, res) {
  try {
    const { name } = req.body;

    const category = await query(
      `INSERT INTO category (name) VALUES ($1) RETURNING *`,
      [name]
    );
    if (!name) {
      return res.status(400).send({
        message: "Request not completed!",
      });
    }
    res.status(201).send(category);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteCategory = async function (req, res) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send({
        message: "ID must be a number!",
      });
    }
    const category = await query(`delete from category where id = ${id}`);
    res.status(204).send();
  } catch (error) {
    console.log(error.message);
  }
};
