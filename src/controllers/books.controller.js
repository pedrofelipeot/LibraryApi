import bookService from "../services/books.service.js";

class BooksController {
  // Listar todos os livros
  async index(req, res) {
      const rows = await bookService.listarLivros();
      res.status(200).json(rows);
  }

  // Listar livro por ID
  async show(req, res) {
      const id = req.params.id;
      const livro = await bookService.buscarLivroPorId(id);
      res.status(200).json(livro);
  }

  // Criar novo livro
  async store(req, res) {
      const livro = req.body;
      const rows = await bookService.criarLivro(livro);
      res.status(201).json({ mensagem: "Livro criado com sucesso!", livro: rows });
  }

  // Atualizar um livro
  async update(req, res) {
      const id = req.params.id;
      const livro = req.body;

      const rows = await bookService.atualizarLivro(id, livro);
      res.status(200).json({ mensagem: "Livro atualizado com sucesso!", livro: rows });
  }

  // Deletar um livro
  async delete(req, res) {
      const id = req.params.id;

      await bookService.deletarLivro(id);
      res.status(200).json({ mensagem: "Livro deletado com sucesso!" });
}
}

export default new BooksController();
