const query = require("../database/pg");

exports.getAllProducts = async function (_, res) {
  try {
    const product = await query("select * from product;");
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getProductById = async function (req, res) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send({
        message: "ID must be a number!",
      });
    }
    const product = await query(`select * from product where id = ${id}`);
    if (!product) {
      return res.status(404).send({
        message: "Given id not found!",
      });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addProduct = async function (req, res) {
  try {
    const { category_id, name, price, count } = req.body;
    if (!category_id || !name || !price || !count) {
      return res.status(400).send({
        message: "Request not completed!",
      });
    }

    const product = await query(
      `
            insert into product(category_id, name, price, count)
            values($1, $2, $3, $4) returning *
            `,
      [category_id, name, price, count]
    );
    res.status(201).send(product);
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteProduct = async function (req, res) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).send({
        message: "ID must be a number!",
      });
    }
    const product = await query(`delete from product where id = ${id}`);

    res.status(204).send();
  } catch (error) {
    console.log(error.message);
  }
};
