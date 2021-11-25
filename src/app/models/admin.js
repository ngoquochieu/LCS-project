const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const Admins = new Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
    img: {
        type:String,
    },
    }, {
        timestamps: true,
});
module.exports = mongoose.model('Admins', Admins);