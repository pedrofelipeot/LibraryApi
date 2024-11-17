CREATE DATABASE IF NOT EXISTS library;

USE library;

CREATE TABLE IF NOT EXISTS livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    genero VARCHAR(100) NOT NULL,
    ano_publicacao INT
);

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS emprestimos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    id_livro INT,
    data_emprestimo DATE,
    data_devolucao DATE,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_livro) REFERENCES livros(id)
);
