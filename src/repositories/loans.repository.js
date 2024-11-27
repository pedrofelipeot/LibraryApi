import { consulta } from "../config/db.config.js";

class LoansRepository {
  async findEmprestimosPendentesByUsuario(usuarioId) {
    const sql = `
      SELECT * 
      FROM emprestimos 
      WHERE usuario_id = ? AND status = 'pendente';
    `;
    const resultado = await consulta(sql, [usuarioId], "Erro ao verificar empréstimos pendentes.");
    return resultado; // Retorna todos os empréstimos pendentes
  }

  // Registrar um novo empréstimo
  async registrarEmprestimo(emprestimo) {
    const sql = `
      INSERT INTO emprestimos (usuario_id, livro_id, data_emprestimo, data_devolucao, status)
      VALUES (?, ?, CURRENT_DATE, ?, ?);
    `;
    return consulta(sql, [emprestimo.usuario_id, emprestimo.livro_id, emprestimo.data_devolucao, emprestimo.status], "Não foi possível registrar o empréstimo.");
  }
  
  

  async registrarDevolucao(emprestimoId) {
    const sql = `
      UPDATE emprestimos
      SET data_devolucao = NOW(), status = 'devolvido'
      WHERE id = ? AND status = 'pendente';
    `;
    return consulta(sql, [emprestimoId], "Não foi possível registrar a devolução.");
  }

  async livrosMaisEmprestados() {
    const sql = `
      SELECT l.titulo, COUNT(e.livro_id) AS total_emprestimos
      FROM emprestimos e
      INNER JOIN livros l ON e.livro_id = l.id
      WHERE e.status = 'pendente' OR e.status = 'devolvido'
      GROUP BY e.livro_id
      ORDER BY total_emprestimos DESC
      LIMIT 10;
    `;
    return consulta(sql, [], "Não foi possível gerar o relatório de livros mais emprestados.");
  }

  async usuariosComPendencias() {
    const sql = `
      SELECT u.nome, COUNT(e.id) AS emprestimos_pendentes
      FROM emprestimos e
      INNER JOIN usuarios u ON e.usuario_id = u.id
      WHERE e.status = 'pendente'
      GROUP BY e.usuario_id
      ORDER BY emprestimos_pendentes DESC;
    `;
    return consulta(sql, [], "Não foi possível gerar o relatório de usuários com pendências.");
  }

  async buscarEmprestimoPorId(id) {
    const sql = `SELECT * FROM emprestimos WHERE id = ?`;
    const resultado = await consulta(sql, [id], "Não foi possível encontrar o empréstimo.");
    return resultado[0] || null; // Retorna o primeiro registro encontrado ou null
  }
}

export default new LoansRepository();
