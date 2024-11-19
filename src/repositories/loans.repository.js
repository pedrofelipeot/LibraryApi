import { consulta } from "../config/db.config.js";
class loansRepository{
        registrarEmprestimo(emprestimo) {
        // Verificar limite de empréstimos pendentes
        const sqlVerificacao = `
          SELECT COUNT(*) AS total
          FROM emprestimos
          WHERE usuario_id = ? AND status = 'pendente';
        `;
        const [resultado] =  consulta(sqlVerificacao, [emprestimo.usuario_id]);
        if (resultado.total >= 3) {
          throw new Error("O usuário já atingiu o limite de empréstimos pendentes.");
        }
    
        // Registrar o empréstimo
        const sql = "INSERT INTO emprestimos SET ?";
        return consulta(sql, emprestimo, "Não foi possível registrar o empréstimo!");
      }

        registrarDevolucao(emprestimoId) {
        const sql = `
          UPDATE emprestimos
          SET data_devolucao = NOW(), status = 'devolvido'
          WHERE id = ? AND status = 'pendente';
        `;
        return consulta(sql, [emprestimoId], "Não foi possível registrar a devolução!");
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

        usuariosComPendencias() {
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
}

export default new loansRepository()
