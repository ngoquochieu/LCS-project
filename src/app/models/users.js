const mongoose = require('mongoose');
const mongooseDateFormat = require('mongoose-date-format');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
    userPhone: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
    fullname: {
        type: String,
    },
    address: {
        type: String,
    },
    date_of_birth : {
        type:String,
    },
    img: {
        type:String,
    },
    role: {
        type:String,
    },
    }, {
        timestamps:true,
});

module.exports = mongoose.model('Users', Users);
