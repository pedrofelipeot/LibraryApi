import express from 'express';
import livroRoutes from './routes/books.routes.js';
import userRoutes from './routes/users.routes.js'
import loansRoutes from './routes/loans.routes.js'

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());


app.use('/livros', livroRoutes); 
app.use('/usuarios' , userRoutes);
app.use('/emprestimos' , loansRoutes )

app.get('/', (req, res) => {
    res.status(200).send('funcionando corretamente!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
