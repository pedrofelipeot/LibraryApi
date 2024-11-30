import { consulta } from "../config/db.config.js";

class UsuarioRepository {
  
  create(usuario) {
    const sql = "INSERT INTO usuarios SET ?";
    return consulta(sql, usuario, "Não foi possível cadastrar o usuário.");
  }

  findAll() {
    const sql = "SELECT * FROM usuarios";
    return consulta(sql, "Não foi possível listar os usuários.");
  }

  async findById(id) {
    console.log("Buscando usuário com ID:", id); // Log para depuração
    const sql = "SELECT * FROM usuarios WHERE id = ?";
    const resultado = await consulta(sql, [id], "Não foi possível listar o usuário com esse ID.");
    console.log("Resultado da busca do usuário:", resultado); // Log do retorno
    return resultado[0] || null; // Retorna o primeiro usuário ou null
  }

  update(usuario, id) {
    const sql = "UPDATE usuarios SET ? WHERE id = ?";
    return consulta(sql, [usuario, id], "Não foi possível atualizar o usuário.");
  }

  delete(id) {
    const sql = "DELETE FROM usuarios WHERE id = ?";
    return consulta(sql, [id], "Não foi possível deletar o usuário.");
  }
}

export default new UsuarioRepository();
