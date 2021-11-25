const mongoose = require('mongoose');
const ObjectId = Schema.ObjectId;
const { Schema } = mongoose;

const Carts = new Schema({
    _id: ObjectId,
    UserID: String,
    items: Array,
});

module.exports = mongoose.model('Carts', Carts);
