import usersRepository from "../repositories/users.repository.js";
class usuarioController{
    async index(req, res){
       try{ 
        const rows = await usersRepository.findAll()
        res.json(rows)
       } catch(erro){
        console.log(erro)
        res.json({erro:"Erro ao listar usuário"})
       }
    }

    async show(req, res){
        try {
            const id = req.params.id
            const rows =  await usersRepository.findById(id)
            res.json(rows)
        } catch (erro){
            console.log(erro)
            res.json({erro:"Erro ao listar usuário por id"})
        }
    }

    async store(req, res) {
            try{
                const usuario = req.body;
                const rows = await usersRepository.create(usuario)
                res.json(rows)
            }catch (erro){
                console.log(erro)
                res.json({erro:"Erro ao criar usuário"})
            }
    }

    async update(req, res){
        try{
            const id = req.params.id
            const usuario = req.body
            const rows = await usersRepository.update(id,usuario)
            res.json(rows)
        } catch (erro) {
            console.log(erro)
            res.json({erro:"Erro ao atualizar usuário"})
        }
    }

    async delete(req , res){
        try{
            const id = req.params.id
            const rows = await usersRepository.delete(id)
            res.json(rows)
        }catch (erro){
            console.log(erro)
            res.json({erro:"Erro ao deletar usuário"})
        }
    }
}

export default new usuarioController()
