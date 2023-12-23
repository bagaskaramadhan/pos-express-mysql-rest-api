const dayjs = require("dayjs");
const productTable = require("../../../entities/productEntity")
const { NotFound, Success } = require("../../../helper/response");
module.exports.DeleteProductById = async (req, res, { }) => {
    const id = req.params.id
    const checkData = await productTable.findOne({ where: { id } })
    if (checkData == null) {
        return NotFound(res, [], "Id not found")
    }
    await productTable.destroy({ where: { id } })
    return Success(res, [], "Success deleted")
}