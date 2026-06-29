import BooksRepository from '../repositories/books.repository.js';

class BooksService {

    async criarLivro(livro) {
        try{
            const livroCriado = await BooksRepository.create(livro);
            return livroCriado;
        }catch (erro) {
            throw new Error("Erro ao criar livro.");
        }
    }

    async listarLivros() {
        const livros = await BooksRepository.findAll();
        return livros;
    }

    async buscarLivroPorId(id) {
        const livro = await BooksRepository.findById(id);
        if (!livro) {
            throw new Error("Livro não encontrado.");
        }
        return livro;
    }

    async atualizarLivro(id, livro) {
        const livroExistente = await BooksRepository.findById(id);
        if (!livroExistente) {
            throw new Error("Livro não encontrado.");
        }
        const livroAtualizado = await BooksRepository.update(id, livro);
        return livroAtualizado;
    }

    async deletarLivro(id) {
        const livroExistente = await BooksRepository.findById(id);
        if (!livroExistente) {
            throw new Error("Livro não encontrado.");
        }
        await BooksRepository.delete(id);
    }
}

export default new BooksService();