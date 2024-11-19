import { consulta } from "../config/db.config.js";
class usuarioRepository {

    create(usuario){
        const sql =  "INSERT INTO usuarios  SET?";
        return consulta(sql,usuario, "Não foi possível cadastrar o usuário")
    }

    findAll(){
        const sql = "SELECT * FROM usuarios";
        return consulta(sql, "Não foi possível listar os usuários")
    }

    findById(id){
        const sql = "SELECT * FROM usuarios WHERE id = ?";
        return consulta(sql,id,"Não foi possível listar o usuário com esse ID")
    }

    update(id,usuario){
        const sql = "UPDATE usuario SET ? WHERE id = ?";
        return consulta(sql,[usuario,id], "Não foi possível atualizar esse usuário")
    }

    delete(id){
        const sql = "DELETE FROM usuarios WHERE id = ?";
        return consulta(sql,id, "Não foi possível deletar esse usuário")
    }
}
export default new usuarioRepository()
