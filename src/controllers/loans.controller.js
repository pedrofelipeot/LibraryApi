import loansRepository from "../repositories/loans.repository.js";

class LoansController {
  // Registrar um novo empréstimo
  async registrarEmprestimo(req, res) {
    try {
      const emprestimo = req.body;
      const rows = await loansRepository.registrarEmprestimo(emprestimo);
      res.json(rows);
    } catch (erro) {
      console.log(erro);
      res.status(500).json({ erro: "Erro ao registrar empréstimo" });
    }
  }

  // Registrar devolução de um empréstimo
  async registrarDevolucao(req, res) {
    try {
      const { id } = req.params; // ID do empréstimo
      const rows = await loansRepository.registrarDevolucao(id);
      if (!rows.affectedRows) {
        return res.status(404).json({ erro: "Empréstimo não encontrado ou já devolvido" });
      }
      res.json({ mensagem: "Devolução registrada com sucesso" });
    } catch (erro) {
      console.log(erro);
      res.status(500).json({ erro: "Erro ao registrar devolução" });
    }
  }

  // Relatório: Livros mais emprestados
  async livrosMaisEmprestados(req, res) {
    try {
      const rows = await loansRepository.livrosMaisEmprestados();
      res.json(rows);
    } catch (erro) {
      console.log(erro);
      res.status(500).json({ erro: "Erro ao gerar relatório de livros mais emprestados" });
    }
  }

  // Relatório: Usuários com pendências
  async usuariosComPendencias(req, res) {
    try {
      const rows = await loansRepository.usuariosComPendencias();
      res.json(rows);
    } catch (erro) {
      console.log(erro);
      res.status(500).json({ erro: "Erro ao gerar relatório de usuários com pendências" });
    }
  }
}

export default new LoansController();
