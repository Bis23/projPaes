const mysql = require('mysql2');
const db = require('./db');
const express = require('express');
const app = express();
const port = 3000;

// Criando a conexão com o banco
const connection = mysql.createConnection({
  host: 'localhost',  // endereço
  user: 'root',  //usuário
  password: 'imtdb', // senha
  database: 'testeDB' // nome do banco
});

// Conectando ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM testeMesa', (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      return;
    }
    res.send(results);
  });
});

app.listen(port, () => console.log(`App rodando na porta ${port} -  http://localhost:${port}/`));