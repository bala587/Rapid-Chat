const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema =new Schema({
    userId: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires:3600
    }
});

module.exports = mongoose.model('Tokens', tokenSchema);