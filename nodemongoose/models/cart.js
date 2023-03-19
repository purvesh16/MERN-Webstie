var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    }
});

var user = new mongoose.model('Cart', schema);

module.exports = user;