const BookRepository = require('../repositories/bookRepository')
const validationError  = require('../core/errors/notfoundError')

class BookService {

    async createBook(body){
        let filter = await dataBook(body)
        return new BookRepository().createBook(filter);
    };

    async obterLivroPorNome(query){

        return new BookRepository().obterLivroPorNome(query);
    };

    async deleteBook(id) {
        await verifyExistBook(id);
        await verifyRentedBook(id);
        return new BookRepository().deleteBook(id);
    };

    async listAllBook() {
        return await new BookRepository().listAllBoook();
    }

    async rentBook(id) {
        await verifyExistBook(id);
        await verifyRentedBook(id);
        return new BookRepository().rentBook(id);

    };

    async  getBookById(id) {
        return new BookRepository().getBookById(id);

    }

}

async function verifyRentedBook(id) {
    const lix =  await new BookRepository().verifyRentedBook(id);
    if(lix.rented === true){
      throw new validationError("O livro já está alugado!")
    }
    return lix;
}

async function verifyExistBook(id) {
    const lix =  await new BookRepository().verifyExistBook(id);
    if(!lix){
        throw new validationError("O livro não existe!")
    }
    return lix;
}

async function dataBook(body){
    return {
        name: body.name,
        description: body.description,
        rented: false,
    }
}

module.exports = BookService
