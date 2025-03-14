const query = require("../database/pg")

exports.getAllProducts = async function(req, res){
    try {
        const products = await query("select * from products;")
        res.send(products)
    } catch (error) {
        console.log(error.message)
    }
}