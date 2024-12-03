const db = require('./conexaoDB');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json()); // Middleware para processar o corpo das requisições JSON

// BUSCANDO DADOS
app.get('/informacoes', (req, res) => {
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


// INSERINDO DADOS
// Obs: O id não pode começar com 0! (001, 010)
app.post('/dados', (req, res) => {
  const { id, nome } = req.body; // Extrai os dados do corpo da requisição
  // Validação para não enviar dados vazios
  if (!id || !nome) {
    return res.status(400).json({ error: 'ID e nome são obrigatórios.' });
  }
  // Comando SQL
  const sql = 'INSERT INTO testeMesa (cel1, cel2) VALUES (?, ?)';
  // Executando o Post
  db.query(sql, [id, nome], (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});


// ATUALIZANDO DADOS
app.put('/dados/:id', (req, res) => {
  const { id } = req.params; // Obtém o ID dos parâmetros da URL
  const { nome } = req.body; // Obtém o novo valor do corpo da requisição
  // Validação para não alterar para um campo Vazio
  if (!nome) {
    return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
  }
  // Comando SQL
  const sql = 'UPDATE testeMesa SET cel2 = ? WHERE cel1 = ?';
  // Executando o Put
  db.query(sql, [nome, id], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar dados:', err);
      return res.status(500).json({ error: 'Erro ao atualizar dados.' });
    }
    // Caso o Usuário não exista
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json({ message: 'Dados atualizados com sucesso!' });
  });
});

// Abrindo uma porta...
app.listen(port, () => console.log(`App rodando na porta ${port} -  http://localhost:${port}/`));