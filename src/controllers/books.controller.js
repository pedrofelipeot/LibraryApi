import booksRepository from "../repositories/books.repository.js";
class BooksController {
    async index(req, res) {
        try {
            const rows = await booksRepository.findAll();
            res.json(rows); 
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao listar os livros" }); 
        }
    }

    async show(req, res) {
        try {
            const id = req.params.id;
            const rows = await booksRepository.findByID(id);
            res.json(rows); 
        } catch (erro) {
            console.log(erro);
            res.status(404).json({ erro: "Erro ao listar livro por ID" }); 
        }
    }

    async store(req, res) {
        try {
            const livro = req.body;
            const rows = await booksRepository.create(livro);
            res.json(rows); 
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao criar livro" }); 
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const livro = req.body;
            const rows = await booksRepository.update(livro, id);
            res.json(rows); 
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao atualizar o livro" }); 
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            const rows = await booksRepository.delete(id);
            res.json(rows); 
        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: "Erro ao deletar o livro" });
        }
    }
}
export default new BooksController();
