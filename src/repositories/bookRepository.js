const bookModel = require('../models/bookModel')

class BookRepository {

    async createBook(filter) {
        try {
            return await bookModel.create(filter)
        } catch (e) {
            console.log(e)
        }
    }

    async obterLivroPorNome(filtro) {
        try {
            const pipeline = [
                { $match: filtro },
            ]
            return await bookModel.aggregate(pipeline)

        } catch (e) {
            console.log(e)
        }
    }

    async deleteBook(id) {
        try {
            return await bookModel.deleteOne({_id: id})
        } catch (e) {
            console.log(e)
        }
    }

    async verifyRentedBook(id) {
        try {
            return await bookModel.findOne({_id: id})
        } catch (e) {
            console.log(e)
        }
    }

    async rentBook(id) {
        try {
            return await bookModel.findByIdAndUpdate({_id: id}, {$set:{rented: true}})
        } catch (e) {
            console.log(e)
        }
    }

    async listAllBoook() {
        try {
            return await bookModel.find({}).lean()
        } catch (e) {
            console.log(e)
        }
    }

    async getBookById(id) {
        try {
            return await bookModel.findOne({_id: id})
        } catch (e) {
            console.log(e)
        }
    }

    async verifyExistBook(id){
        try {
            return await bookModel.findOne({_id: id})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = BookRepository
