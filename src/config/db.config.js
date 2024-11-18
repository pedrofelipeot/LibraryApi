import mysql from 'mysql2'
import env from 'dotenv'

env.config();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password:process.env.DB_PASS,
    database: process.env.DB_DATABASE
}

const db = mysql.createPool(dbConfig);

export const consulta = (sql, valores = [], mensagemReject)=>{
    return new Promise((resolve, reject) => {
        db.query(sql,valores,(erro, resultado)=>{
            if(erro){
                return reject(mensagemReject)
            } else{
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(resultado)
            }
        })
    })
} 

export default db;
