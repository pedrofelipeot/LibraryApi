## Descrição do projeto

A **LibraryApi** é uma API RESTful para gerenciar bibliotecas, incluindo funcionalidades para cadastro de livros, usuários e empréstimos. O projeto utiliza Node.js e MySQL como tecnologias principais.

![Diagrama do Banco de Dados](./images/diagrama-db.png) <!-- Exemplo de diagrama do banco de dados -->

---

## Como baixar o repositório

Siga as etapas abaixo para clonar e configurar o repositório localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedrofelipeot/LibraryApi.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd LibraryApi
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Instale o nodemon (opcional, mas recomendado para desenvolvimento local):
   ```bash
   npm install --save-dev nodemon
   ```

5. Configure o banco de dados:  
   Certifique-se de que o MySQL está rodando e crie um banco de dados para o projeto. Em seguida, configure as variáveis de ambiente no arquivo `.env`.

   Exemplo de arquivo `.env`:
   ```makefile
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   DB_NAME=libraryapi
   ```

6. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

   Ou inicie o servidor normalmente:
   ```bash
   npm start
   ```

7. Utilize o arquivo `Insomnia_URLs` localizado na raiz do projeto para importar as rotas no Insomnia e facilitar os testes da API.

[URL Insomnia](https://github.com/pedrofelipeot/LibraryApi/tree/main/Insomnia_URLs)

---

## Pré-requisitos

Antes de começar, certifique-se de que você possui as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

- Node.js
- MySQL
- Git

Para verificar as versões instaladas:

```bash
node -v
mysql --version
git --version
```


---

## Como contribuir

1. Faça um fork do repositório:  
   Acesse o repositório principal e clique no botão "Fork" para criar uma cópia em sua conta do GitHub.

2. Clone seu fork:  
   No terminal, execute o seguinte comando:
   ```bash
   git clone https://github.com/pedrofelipeot/LibraryApi.git
   ```

3. Crie um branch para sua contribuição:  
   Dê um nome significativo ao branch que descreva sua contribuição:
   ```bash
   git checkout -b nome-do-seu-branch
   ```

4. Faça suas alterações:  
   Adicione as funcionalidades ou resolva os problemas conforme necessário.

5. Adicione e commit suas alterações:  
   Certifique-se de incluir uma mensagem clara e descritiva:
   ```bash
   git add .
   git commit -m "Descrição clara da alteração"
   ```

6. Envie suas alterações para o GitHub:  
   Faça o push do branch para o seu repositório:
   ```bash
   git push origin nome-do-seu-branch
   ```

7. Crie um Pull Request (PR):  
   No GitHub, acesse o repositório original e clique em "New Pull Request". Siga as instruções para submeter sua contribuição.

---

## Autores

- **Pedro Felipe** - *Desenvolvedor* - [@pedrofelipeot](https://github.com/pedrofelipeot)

---

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

![Licença MIT](./images/mit-logo.png) <!-- Exemplo de logo de licença -->

