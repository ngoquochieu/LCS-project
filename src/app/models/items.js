const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const Items = new Schema({
    _id: ObjectId,
    name: String,
    type: Array,
    price: Number,
    img: String,
    description: String,
    details: {
        quantity: Number,
        img_detail: Array,
        size: Array,
        color: String,
        product_code: String,
        brand: String,
        size_fit: {
            model_wears: String,
            model_height: String,
        },
        about: Array,
    },
    status: Boolean,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Items', Items);
