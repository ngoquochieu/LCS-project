const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/clothing_store_dev');
    } catch (error) {
        console.log(error);
    }
    console.log('Successful !!!');
}

module.exports = { connect };
