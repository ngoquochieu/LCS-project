const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.ObjectId;

const Categories = new Schema({
    _id: ObjectId,
    name: String,
    items: Array,
});

module.exports = mongoose.model('Categories', Categories);
