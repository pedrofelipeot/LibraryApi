import usersRepository from "../repositories/users.repository.js";

class UsuarioController {
  async index(req, res) {
    try {
      const rows = await usersRepository.findAll();
      res.json(rows);
    } catch (erro) {
      console.error("Erro ao listar usuários:", erro);
      res.status(500).json({ erro: "Erro ao listar usuários." });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const usuario = await usersRepository.findById(id);

      if (!usuario) {
        return res.status(404).json({ erro: "Usuário não encontrado." });
      }

      res.json(usuario);
    } catch (erro) {
      console.error("Erro ao listar usuário por ID:", erro);
      res.status(500).json({ erro: "Erro ao listar usuário por ID." });
    }
  }

  async store(req, res) {
    try {
      const usuario = req.body;
      const rows = await usersRepository.create(usuario);
      res.status(201).json({ mensagem: "Usuário criado com sucesso!", usuario: rows });
    } catch (erro) {
      console.error("Erro ao criar usuário:", erro);
      res.status(500).json({ erro: "Erro ao criar usuário." });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const usuario = req.body;

      // Verifica se o usuário existe
      const usuarioExistente = await usersRepository.findById(id);
      if (!usuarioExistente) {
        return res.status(404).json({ erro: "Usuário não encontrado." });
      }

      // Atualiza o usuário
      const rows = await usersRepository.update(usuario, id);
      res.json({ mensagem: "Usuário atualizado com sucesso!", usuario: rows });
    } catch (erro) {
      console.error("Erro ao atualizar usuário:", erro);
      res.status(500).json({ erro: "Erro ao atualizar usuário." });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      // Verifica se o usuário existe
      const usuarioExistente = await usersRepository.findById(id);
      if (!usuarioExistente) {
        return res.status(404).json({ erro: "Usuário não encontrado." });
      }

      // Deleta o usuário
      await usersRepository.delete(id);
      res.json({ mensagem: "Usuário deletado com sucesso!" });
    } catch (erro) {
      console.error("Erro ao deletar usuário:", erro);
      res.status(500).json({ erro: "Erro ao deletar usuário." });
    }
  }
}

export default new UsuarioController();
