const item = require("../models/ItemModel")


const createItem = (product, quantity) =>
{
    return item.create(
        {
            product, 
            quantity
        }
    )
}

module.exports = {
    createItem
}