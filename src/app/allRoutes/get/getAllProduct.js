const productTable = require("../../../entities/productEntity")
const { Success } = require("../../../helper/response")
module.exports.GetAllProduct = (req, res, { }) => {
    productTable.findAll()
        .then((result) => {
            return Success(res, result, "Success created")
        })
        .catch((err) => {
            console.log(err.message)
        })
}