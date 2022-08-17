const express = require('express');
const HttpStatus = require('http-status');

const BookService = require('../services/boookService')

const router = express.Router();

router.route('/')
    .post(async (req, res, next) => {
        try {
            res.status(HttpStatus.OK).send(await new BookService().createBook(req.body));
        } catch (e) {
            next(e);
        }
    })

    .get(async (req, res, next) => {
        try {

            res.status(HttpStatus.OK).send(await executarConsulta(req.query))

        } catch (e) {
            next(e);
        }
    });

router.route('/:id')
    .delete(async (req, res) => {
        try {
            res.status(HttpStatus.OK).send(await new BookService().deleteBook(req.params.id));
        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST).send("Ocorreu um erro ao tentar deletar o livro!")
        }
    })
    .patch(async (req, res, ) => {
        try {
            res.status(HttpStatus.OK).send(await new BookService().rentBook(req.params.id));
        } catch (e) {
            console.log(e)
            res.status(HttpStatus.BAD_REQUEST).send("Ocorreu um erro ao tentar alugar o livro!")
        }
    })
    .get(async (req, res, next) => {
        try {
            res.status(HttpStatus.OK).send(await new BookService().getBookById(req.params.id));
        } catch (e) {
            next(e);
        }
    });

async function executarConsulta(query) {
    if (query.name) {
        return new BookService().obterLivroPorNome(query);
    }
    return new BookService().listAllBook();
}

    module.exports = router;
