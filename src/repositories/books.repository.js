import { consulta } from "../config/db.config.js";

class BooksRepository {
  create(livro) {
    const sql = "INSERT INTO livros SET ?";
    return consulta(sql, livro, "Não foi possível cadastrar o livro!");
  }

  findAll() {
    const sql = "SELECT * FROM livros";
    return consulta(sql, "Não foi possível listar os livros!");
  }

  async findById(id) {
    console.log("Buscando livro com ID:", id); // Log para depuração
    const sql = "SELECT * FROM livros WHERE id = ?";
    const resultado = await consulta(sql, [id], "Não foi possível encontrar o livro com esse ID!");
    console.log("Resultado da busca do livro:", resultado); // Log do retorno
    return resultado[0] || null; // Retorna o primeiro livro ou null
  }

  update(livro, id) {
    const sql = "UPDATE livros SET ? WHERE id = ?";
    return consulta(sql, [livro, id], "Não foi possível atualizar o livro!");
  }

  delete(id) {
    const sql = "DELETE FROM livros WHERE id = ?";
    return consulta(sql, [id], "Não foi possível excluir o livro!");
  }
}

export default new BooksRepository();
