const query = require("../database/pg");

exports.getAllProducts = async function (req, res) {
  try {
    const products = await query("select * from products;");
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addProduct = async function (req, res) {
  try {
    const { name, price, count } = req.body;

    const product = await query(
      `
            insert into products(name, price, count)
            values($1, $2, $3) returning *
            `,
      [name, price, count]
    );
    res.status(201).send(product)
  } catch (error) {
    console.log(error.message)
  }
};
