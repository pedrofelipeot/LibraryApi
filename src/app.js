import express from 'express'

const port = process.env.PORT || 3000;
const app = express()

app.use(express.json())

//app.get('/', (req,res)=>{
   // res.status(200).send('funcionado corretamente!!!!!')
//})

app.listen(port, () =>{
    console.log(`servidor rodando na porta http://localhost:${port}`)
})