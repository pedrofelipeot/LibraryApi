import prisma from "../config/prisma.js";

class LoansRepository {
  async findEmprestimosPendentesByUsuario(usuarioId) {
    return await prisma.emprestimo.findMany({
      where: {
        usuarioId: Number(usuarioId),
        status: "pendente"
      }
    });
  }

  async registrarEmprestimo(emprestimo) {
    return await prisma.emprestimo.create({
      data: {
        usuarioId: Number(emprestimo.usuarioId),
        livroId: Number(emprestimo.livroId),
        dataDevolucao: emprestimo.dataDevolucao
          ? new Date(emprestimo.dataDevolucao)
          : null
      }
    });
  }

  async registrarDevolucao(id) {
    return await prisma.emprestimo.updateMany({
      where: {
        id: Number(id),
        status: "pendente"
      },
      data: {
        dataDevolucao: new Date(),
        status: "devolvido"
      }
    });
  }

  async buscarEmprestimoPorId(id) {
    return await prisma.emprestimo.findUnique({
      where: {
        id: Number(id)
      }
    });
  }

  async livrosMaisEmprestados() {
    return await prisma.$queryRaw`
      SELECT l.titulo,
             COUNT(e.livro_id) AS total_emprestimos
      FROM emprestimos e
      INNER JOIN livros l
        ON e.livro_id = l.id
      WHERE e.status = 'pendente'
         OR e.status = 'devolvido'
      GROUP BY e.livro_id
      ORDER BY total_emprestimos DESC
      LIMIT 10
    `;
  }

  async usuariosComPendencias() {
    return await prisma.$queryRaw`
      SELECT u.nome,
             COUNT(e.id) AS emprestimos_pendentes
      FROM emprestimos e
      INNER JOIN usuarios u
        ON e.usuario_id = u.id
      WHERE e.status = 'pendente'
      GROUP BY e.usuario_id
      ORDER BY emprestimos_pendentes DESC
    `;
  }
}

export default new LoansRepository();