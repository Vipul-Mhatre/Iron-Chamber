// user.model.js
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    lastModified: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
});

const File = mongoose.model("file", fileSchema);
module.exports = File;