import prisma from "../config/prisma.js";

class BooksRepository {
  async create(livro) {
    return await prisma.livro.create({
      data: livro
    });
  }

  async findAll() {
    return await prisma.livro.findMany();
  }

  async findById(id) {
    return await prisma.livro.findUnique({
      where: {
        id: Number(id)
      }
    });
  }

  async update(livro, id) {
    return await prisma.livro.update({
      where: {
        id: Number(id)
      },
      data: livro
    });
  }

  async delete(id) {
    return await prisma.livro.delete({
      where: {
        id: Number(id)
      }
    });
  }
}

export default new BooksRepository();