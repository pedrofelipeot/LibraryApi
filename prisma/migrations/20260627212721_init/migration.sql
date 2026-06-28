-- CreateTable
CREATE TABLE `Livro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `autor` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `anoPublicacao` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Emprestimo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `livroId` INTEGER NOT NULL,
    `dataEmprestimo` DATETIME(3) NULL,
    `dataDevolucao` DATETIME(3) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pendente',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Emprestimo` ADD CONSTRAINT `Emprestimo_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Emprestimo` ADD CONSTRAINT `Emprestimo_livroId_fkey` FOREIGN KEY (`livroId`) REFERENCES `Livro`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
