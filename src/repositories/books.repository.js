import { consulta } from "../config/db.config.js";
class BooksRepository{

create(livro) {
    const sql = "INSERT INTO livros SET ?"; // Método para criar um livro
    return consulta(sql, livro, "Não foi possível cadastrar o livro!");
}


findAll() {
    const sql = "SELECT * FROM livros";  // Seleciona todos os livros da tabela 'livros'
    return consulta(sql, "Não foi possível listar os livros!");
}


findByID(id) {
    const sql = "SELECT * FROM livros WHERE id = ?";  // Busca livro pelo ID
    return consulta(sql, [id], "Não foi possível encontrar o livro com esse ID!");
}


update(livro, id) {
    const sql = "UPDATE livros SET ? WHERE id = ?";  // Atualiza livro pelo ID
    return consulta(sql, [livro, id], "Não foi possível atualizar o livro!");
}


delete(id) {
    const sql = "DELETE FROM livros WHERE id = ?";  // Exclui livro pelo ID
    return consulta(sql, [id], "Não foi possível excluir o livro!");
}
}
export default new BooksRepository()
