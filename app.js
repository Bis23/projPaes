const db = require('./conexaoDB');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Manipulando o banco (testeDados)
  db.query('SELECT * FROM testeMesa', (err, results) => {
    if (err) {
      console.error('Erro na consulta:', err);
      return;
    }
    // Enviando dados para a requisição
    res.send(results);
  });
});

app.listen(port, () => console.log(`App rodando na porta ${port} -  http://localhost:${port}/`));