const dayjs = require("dayjs");
const productTable = require("../../../entities/productEntity")
const { v4: uuidv4 } = require('uuid');
const { Success } = require("../../../helper/response");
module.exports.PostCreateProduct = (req, res, { }) => {
    const id = uuidv4();
    const currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss")
    const data = {
        id,
        name: req.body.name,
        category_id: req.body.categoryId,
        stock: req.body.stock,
        description: req.body.description,
        created_at: currentDate,
        updated_at: currentDate,
    }

    productTable.create(data)
        .then((result) => {
            return Success(res, result, "Success created")
        })
        .catch(err => {
            console.error(err.message)
        })
}