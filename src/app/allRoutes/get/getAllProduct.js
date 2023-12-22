const productTable = require("../../../entities/productEntity")
module.exports.GetAllProduct = (req, res, { }) => {
    productTable.findAll()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err.message)
        })
}