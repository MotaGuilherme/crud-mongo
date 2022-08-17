const mongoose = require('../database/mongoConfig')

const BookSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },

    description: {
        type: String,
        required: true,
    },

    rented: {
        type: Boolean,
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const bookModel = mongoose.model('Book', BookSchema);

module.exports = bookModel;
