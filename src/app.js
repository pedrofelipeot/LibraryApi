import express from 'express';
import livroRoutes from './routes/books.routes.js'; // Importa as rotas corretamente

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Agora o caminho de cada rota será diretamente o que está nas rotas
app.use('/livros', livroRoutes); // Agora, as rotas vão começar com /livros

app.get('/', (req, res) => {
    res.status(200).send('funcionando corretamente!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
