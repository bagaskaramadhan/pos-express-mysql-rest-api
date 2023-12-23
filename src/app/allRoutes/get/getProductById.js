const dayjs = require("dayjs");
const productTable = require("../../../entities/productEntity")
const { NotFound, Success } = require("../../../helper/response");
module.exports.GetProductById = async (req, res, { }) => {
    const id = req.params.id
    const checkData = await productTable.findOne({ where: { id } })
        .then((result) => {
            return Success(res, result, "Success get data")
        })
        .catch((err) => {
            return NotFound(res, [], err.message)
        })
}