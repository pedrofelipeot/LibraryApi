import loansRepository from "../repositories/loans.repository.js";
import booksRepository from "../repositories/books.repository.js";
import usersRepository from "../repositories/users.repository.js";

class LoansController {
  // Registrar um novo empréstimo
  async registrarEmprestimo(req, res) {
    try {
      const emprestimo = req.body;
  
      // Log do corpo da requisição
      console.log("Corpo da requisição:", emprestimo);
  
      // Verificar se o ID do usuário existe
      const usuario = await usersRepository.findById(emprestimo.usuario_id);
      console.log("Usuário encontrado:", usuario); // Verificar se o usuário é retornado
      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado." });
      }
  
      // Verificar se o ID do livro existe
      const livro = await booksRepository.findById(emprestimo.livro_id);
      console.log("Livro encontrado:", livro); // Verificar se o livro é retornado
      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado." });
      }
  
      // Registrar o empréstimo
      const rows = await loansRepository.registrarEmprestimo(emprestimo);
      console.log("Empréstimo registrado:", rows);
      res.status(201).json(rows);
    } catch (erro) {
      console.error("Erro no registro de empréstimo:", erro); // Verificar o erro
      if (erro.message && erro.message.includes("limite")) {
        return res.status(400).json({ erro: erro.message });
      }
      res.status(500).json({ erro: "Erro ao registrar empréstimo." });
    }
  }
  
  

  // Registrar devolução de um empréstimo
  async registrarDevolucao(req, res) {
    try {
      const { id } = req.params;

      // Verificar se o empréstimo com o ID existe
      const emprestimo = await loansRepository.buscarEmprestimoPorId(id);
      if (!emprestimo) {
        return res.status(404).json({ erro: "Empréstimo não encontrado." });
      }

      // Verificar se o status do empréstimo é pendente
      if (emprestimo.status !== "pendente") {
        return res.status(400).json({ erro: "Empréstimo já devolvido ou inválido para devolução." });
      }

      const rows = await loansRepository.registrarDevolucao(id);
      res.json({ mensagem: "Devolução registrada com sucesso!" });
    } catch (erro) {
      console.error("Erro ao registrar devolução:", erro);
      res.status(500).json({ erro: "Erro ao registrar devolução." });
    }
  }

  // Relatório: Livros mais emprestados
  async livrosMaisEmprestados(req, res) {
    try {
      const rows = await loansRepository.livrosMaisEmprestados();
      res.json(rows);
    } catch (erro) {
      console.error("Erro ao gerar relatório de livros mais emprestados:", erro);
      res.status(500).json({ erro: "Erro ao gerar relatório de livros mais emprestados." });
    }
  }

  // Relatório: Usuários com pendências
  async usuariosComPendencias(req, res) {
    try {
      const rows = await loansRepository.usuariosComPendencias();
      res.json(rows);
    } catch (erro) {
      console.error("Erro ao gerar relatório de usuários com pendências:", erro);
      res.status(500).json({ erro: "Erro ao gerar relatório de usuários com pendências." });
    }
  }
}

export default new LoansController();
