import booksRepository from "../repositories/books.repository.js";

class BooksController {
  // Listar todos os livros
  async index(req, res) {
    try {
      const rows = await booksRepository.findAll();
      res.json(rows);
    } catch (erro) {
      console.error("Erro ao listar livros:", erro);
      res.status(500).json({ erro: "Erro ao listar os livros." });
    }
  }

  // Listar livro por ID
  async show(req, res) {
    try {
      const id = req.params.id;
      const livro = await booksRepository.findById(id);

      // Verifica se o livro foi encontrado
      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado." });
      }

      res.json(livro);
    } catch (erro) {
      console.error("Erro ao listar livro por ID:", erro);
      res.status(500).json({ erro: "Erro ao listar livro por ID." });
    }
  }

  // Criar novo livro
  async store(req, res) {
    try {
      const livro = req.body;
      const rows = await booksRepository.create(livro);
      res.status(201).json({ mensagem: "Livro criado com sucesso!", livro: rows });
    } catch (erro) {
      console.error("Erro ao criar livro:", erro);
      res.status(500).json({ erro: "Erro ao criar livro." });
    }
  }

  // Atualizar um livro
  async update(req, res) {
    try {
      const id = req.params.id;
      const livro = req.body;

      // Verifica se o livro existe
      const livroExistente = await booksRepository.findById(id);
      if (!livroExistente) {
        return res.status(404).json({ erro: "Livro não encontrado." });
      }

      // Atualiza o livro
      const rows = await booksRepository.update(livro, id);
      res.json({ mensagem: "Livro atualizado com sucesso!", livro: rows });
    } catch (erro) {
      console.error("Erro ao atualizar livro:", erro);
      res.status(500).json({ erro: "Erro ao atualizar livro." });
    }
  }

  // Deletar um livro
  async delete(req, res) {
    try {
      const id = req.params.id;

      // Verifica se o livro existe
      const livroExistente = await booksRepository.findById(id);
      if (!livroExistente) {
        return res.status(404).json({ erro: "Livro não encontrado." });
      }

      // Deleta o livro
      await booksRepository.delete(id);
      res.json({ mensagem: "Livro deletado com sucesso!" });
    } catch (erro) {
      console.error("Erro ao deletar livro:", erro);
      res.status(500).json({ erro: "Erro ao deletar livro." });
    }
  }
}

export default new BooksController();
