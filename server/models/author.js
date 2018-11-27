const mongoose = require('mongoose');
const Author = new mongoose.Schema({
    name: String,
    age: Number,
    authorID: String
});

module.exports = mongoose.model('Author', Author);