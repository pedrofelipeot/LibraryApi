import express from 'express';
import livroRoutes from './routes/books.routes.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());


app.use('/livros', livroRoutes); 

app.get('/', (req, res) => {
    res.status(200).send('funcionando corretamente!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
