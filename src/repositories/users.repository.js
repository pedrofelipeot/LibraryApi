import prisma from "../config/prisma.js";

class UsersRepository {
  async create(usuario) {
    return await prisma.usuario.create({
      data: usuario
    });
  }

  async findAll() {
    return await prisma.usuario.findMany();
  }

  async findById(id) {
    return await prisma.usuario.findUnique({
      where: {
        id: Number(id)
      }
    });
  }

  async update(usuario, id) {
    return await prisma.usuario.update({
      where: {
        id: Number(id)
      },
      data: usuario
    });
  }

  async delete(id) {
    return await prisma.usuario.delete({
      where: {
        id: Number(id)
      }
    });
  }
}

export default new UsersRepository();