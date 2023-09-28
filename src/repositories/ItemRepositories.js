const { uniqueId } = require("lodash")
const item = require("../models/ItemModel")

const createItemRepository = (product, quantity, valueItem) =>{
    return item.create(
        {
            product: product, 
            quantity: quantity,
            valueItem: valueItem,
        }
    )
}

const deleteByIdItemRepository = (itemId) =>{
    return item.deleteOne({ _id: itemId })
}

const findByIdItemRepository = async (itemId) => {
    return item.findById(itemId).populate('product')
} 

module.exports = {
    createItemRepository,
    deleteByIdItemRepository,
    findByIdItemRepository
}