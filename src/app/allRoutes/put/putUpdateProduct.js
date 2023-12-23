const dayjs = require("dayjs");
const productTable = require("../../../entities/productEntity")
const { NotFound, Success } = require("../../../helper/response");
module.exports.PutUpdateProduct = async (req, res, { }) => {
    const id = req.params.id
    const checkData = await productTable.findOne({ where: { id } })
    if (checkData == null) {
        return NotFound(res, [], "Id not found")
    }

    const updatedAt = dayjs().format("YYYY-MM-DD HH:mm:ss")
    const data = {
        name: !req.body.name ? checkData.name : req.body.name,
        category_id: !req.body.categoryId ? checkData.category_id : req.body.categoryId,
        stock: !req.body.stock ? checkData.stock : req.body.stock,
        description: !req.body.description ? checkData.description : req.body.description,
        updated_at: updatedAt,
    }
    await productTable.update(data, { where: { id } })
    return Success(res, [], "Success updated")
}