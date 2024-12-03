const db = require('./conexaoDB');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json()); // Middleware para processar o corpo das requisições JSON



/* ====================== 
  TABELA DE APLICADOR PJ 
====================== */
// >> BUSCANDO DADOS
app.get('/aplicadorPJ/:email/:rg', (req, res) => {
  // Extrai os parâmetros da URL
  const { email, rg } = req.params;
  const sql = 'SELECT * FROM aplicador_PJ WHERE Email = ? AND RG = ?';
  // Executa a consulta no banco de dados
  db.query(sql, [email, rg], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Nenhum registro encontrado.' });
    }
    //retorna os resultados encontrados
    res.status(200).json(results);
  });
});

// >> INSERINDO DADOS - adaptado para a tabela aplicador_PJ
app.post('/aplicadorPJ', (req, res) => {
  // Extrai os dados do corpo da requisição
  const {
    RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email,
    Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin, 
    Portfolio, Lattes, Pagamento, Valor, Empresa, CNPJ, CNAE, 
    NomeResponsavel, EmailResponsavel, CPFResponsavel
  } = req.body;
  // Validação para garantir que os campos obrigatórios estejam preenchidos
  if (!RG || !Nome || !CPF) {
    return res.status(400).json({ error: 'Os campos RG, Nome e CPF são obrigatórios.' });
  }
  const sql = `
    INSERT INTO aplicador_PJ (
      RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email, 
      Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin, 
      Portfolio, Lattes, Pagamento, Valor, Empresa, CNPJ, CNAE, 
      NomeResponsavel, EmailResponsavel, CPFResponsavel
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  // Array de valores para preencher os placeholders no comando SQL
  const values = [
    RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email,
    Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin,
    Portfolio, Lattes, Pagamento, Valor, Empresa, CNPJ, CNAE,
    NomeResponsavel, EmailResponsavel, CPFResponsavel
  ];
  // Executando o SQL
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});

// >> ATUALIZANDO DADOS - adaptado para a tabela aplicador_PJ
app.put('/aplicadorPJ/:email', (req, res) => {
  const { email } = req.params; // Obtém o Email dos parâmetros da URL
  console.log("Email recebido da URL: ", email);
  // Obtem os dados de acordo com o email buscado
  const values = [
    req.body.RG, req.body.Nome, req.body.Nacionalidade, req.body.EstCivil, req.body.Profissao, req.body.CPF, req.body.Email,
    req.body.Endereco, req.body.Cidade, req.body.Telefone, req.body.UF, req.body.Curriculo, req.body.URL, req.body.Linkedin,
    req.body.Portfolio, req.body.Lattes, req.body.Pagamento, req.body.Valor, req.body.Empresa, req.body.CNPJ, req.body.CNAE,
    req.body.NomeResponsavel, req.body.EmailResponsavel, req.body.CPFResponsavel
  ];
  // Comando SQL
  const sql = `
  UPDATE aplicador_PJ SET RG = ?, Nome = ?, Nacionalidade = ?, EstCivil = ?, Profissao = ?, CPF = ?, Email = ?, Endereco = ?, Cidade = ?, Telefone = ?, UF = ?, Curriculo = ?, URL = ?, Linkedin = ?, Portfolio = ?, Lattes = ?, Pagamento = ?, Valor = ?, Empresa = ?, CNPJ = ?, CNAE = ?, NomeResponsavel = ?, EmailResponsavel = ?, CPFResponsavel = ? WHERE Email = ?;
  `;
  // Executando o SQL
  db.query(sql, [...values, email], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar dados:', err);
      return res.status(500).json({ error: 'Erro ao atualizar dados.' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json({ message: 'Dados atualizados com sucesso!' });
  });
});





/* ====================== 
  TABELA DE APLICADOR RPA
====================== */
// >> BUSCANDO DADOS
app.get('/aplicadorRPA/:email/:rg', (req, res) => {
  const { email, rg } = req.params;
  const sql = 'SELECT * FROM aplicador_RPA WHERE Email = ? AND RG = ?';
  db.query(sql, [email, rg], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Nenhum registro encontrado.' });
    }
    res.status(200).json(results);
  });
});

// >> INSERINDO DADOS - adaptado para a tabela aplicador_RPA
app.post('/aplicadorRPA', (req, res) => {
  const {
    RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email,
    Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin,
    Portfolio, Lattes
  } = req.body;
  if (!RG || !Nome || !CPF) {
    return res.status(400).json({ error: 'Os campos RG, Nome e CPF são obrigatórios.' });
  }
  const sql = `
    INSERT INTO aplicador_RPA (
      RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email, 
      Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin, 
      Portfolio, Lattes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email,
    Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin,
    Portfolio, Lattes
  ];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});

// >> ATUALIZANDO DADOS - adaptado para a tabela aplicador_PJ
app.put('/aplicadorRPA/:email', (req, res) => {
  const { email } = req.params;
  const values = [
    req.body.RG, req.body.Nome, req.body.Nacionalidade, req.body.EstCivil, req.body.Profissao, req.body.CPF, req.body.Email,
    req.body.Endereco, req.body.Cidade, req.body.Telefone, req.body.UF, req.body.Curriculo, req.body.URL, req.body.Linkedin,
    req.body.Portfolio, req.body.Lattes
  ];
  const sql = `
  UPDATE aplicador_PJ SET RG = ?, Nome = ?, Nacionalidade = ?, EstCivil = ?, Profissao = ?, CPF = ?, Email = ?, Endereco = ?, Cidade = ?, Telefone = ?, UF = ?, Curriculo = ?, URL = ?, Linkedin = ?, Portfolio = ?, Lattes = ? WHERE Email = ?;
  `;
  db.query(sql, [...values, email], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar dados:', err);
      return res.status(500).json({ error: 'Erro ao atualizar dados.' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json({ message: 'Dados atualizados com sucesso!' });
  });
});





/* ====================== 
  TABELA DE APLICADOR MAUA
====================== */
// >> BUSCANDO DADOS
app.get('/aplicadorMaua/:email/:rg', (req, res) => {
  const { email, rg } = req.params;
  const sql = 'SELECT * FROM aplicador_Maua WHERE Email = ? AND RG = ?';
  db.query(sql, [email, rg], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Nenhum registro encontrado.' });
    }
    res.status(200).json(results);
  });
});

// >> INSERINDO DADOS - adaptado para a tabela aplicador_Maua
app.post('/aplicadorMaua', (req, res) => {
  const { RG, Email } = req.body;
  if (!RG || !Email) {
    return res.status(400).json({ error: 'Os campos RG e E-mail são obrigatórios.' });
  }
  const sql = `INSERT INTO aplicador_Maua (RG, Email) VALUES (?, ?)`;
  const values = [RG, Email];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});

// >> ATUALIZANDO DADOS - adaptado para a tabela aplicador_Maua
app.put('/aplicadorMaua/:email', (req, res) => {
  const { email } = req.params;
  console.log("Email recebido da URL: ", email);
  const values = [req.body.RG, req.body.Email];
  const sql = `UPDATE aplicador_Maua SET RG = ?, Email = ? WHERE Email = ?;`;
  db.query(sql, [...values, email], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar dados:', err);
      return res.status(500).json({ error: 'Erro ao atualizar dados.' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json({ message: 'Dados atualizados com sucesso!' });
  });
});





/* ====================== 
  TABELA DE ATIVIDADE
====================== */
// BUSCANDO DADOS
app.get('/atividade/:codigo/:rg', (req, res) => {
  const { codigo, rg } = req.params;
  const sql = `
    SELECT * FROM Atividade WHERE Codigo = ? 
    AND (AplicadorRPA = ? OR AplicadorPJ = ? OR AplicadorMaua_Email = ? OR AplicadorMaua_RG = ?)
  `;
  db.query(sql, [codigo, rg, rg, rg, rg], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return;
    }
    res.send(results);
  });
});


// INSERINDO DADOS
// Obs: O id não pode começar com 0! (001, 010)
// Obs: O null deve estar minusculo
app.post('/atividade', (req, res) => {
  // Extrai os dados do corpo da requisição
  const {
    Nome, Categoria, PublicoAlvo,
    Descricao, Topicos, Objetivos, Metodologia,
    Desafios, Recursos, CompetenciasTecnicas, CompetenciasTransversais,
    Tamanho, PartComunidade, Status, Horario,
    AplicadorRPA, AplicadorPJ, AplicadorMaua_Email, AplicadorMaua_RG
  } = req.body;
  // Validação para no enviar dados vazios
  if (!Nome) {
    return res.status(400).json({ error: 'Nome é um campo obrigatório.' });
  }
  // Comando SQL (adaptado para incluir todos os campos da tabela)
  const sql = `
    INSERT INTO Atividade (
    Nome, Categoria, PublicoAlvo, Descricao, Topicos, Objetivos, 
    Metodologia, Desafios, Recursos, CompetenciasTecnicas, CompetenciasTransversais, 
    Tamanho, PartComunidade, Status, Horario, AplicadorRPA, AplicadorPJ, 
    AplicadorMaua_Email, AplicadorMaua_RG) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [Nome, Categoria, PublicoAlvo, Descricao, Topicos, Objetivos, Metodologia, Desafios, Recursos, CompetenciasTecnicas, CompetenciasTransversais, Tamanho, PartComunidade, Status, Horario, AplicadorRPA, AplicadorPJ, AplicadorMaua_Email, AplicadorMaua_RG]
  // Executando o comando SQL
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});

// ATUALIZANDO DADOS
app.put('/atividade/:codigo', (req, res) => {
  const { codigo } = req.params;
  const values = [req.body.Nome, req.body.Categoria, req.body.PublicoAlvo, req.body.Descricao, req.body.Topicos, req.body.Objetivos, req.body.Metodologia, req.body.Desafios, req.body.Recursos, req.body.CompetenciasTecnicas, req.body.CompetenciasTransversais, req.body.Tamanho, req.body.PartComunidade, req.body.Status, req.body.Horario, req.body.AplicadorRPA, req.body.AplicadorPJ, req.body.AplicadorMaua_Email, req.body.AplicadorMaua_RG]
  const sql = `
  UPDATE Atividade
  SET Nome = ?, Categoria = ?, PublicoAlvo = ?, Descricao = ?, Topicos = ?, Objetivos = ?, Metodologia = ?, Desafios = ?, Recursos = ?, CompetenciasTecnicas = ?, CompetenciasTransversais = ?, Tamanho = ?, PartComunidade = ?, Status = ?, Horario = ?, AplicadorRPA = ?, AplicadorPJ = ?, AplicadorMaua_Email = ?, AplicadorMaua_RG = ?
  WHERE Codigo = ?;
`;
  db.query(sql, [...values, codigo], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar dados:', err);
      return res.status(500).json({ error: 'Erro ao atualizar dados.' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Atividade não encontrada.' });
    }
    res.status(200).json({ message: 'Dados atualizados com sucesso!' });
  });
});





/* ====================== 
  TABELA DE IMAGENS
====================== */
// >> BUSCANDO DADOS
app.get('/imagens/:ID/:atividade', (req, res) => {
  // Extrai os parâmetros da URL
  const { id, atividade } = req.params;
  const sql = 'SELECT * FROM Imagens WHERE ID = ? AND atividade = ?';
  db.query(sql, [id, atividade], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return res.status(500).json({ error: 'Erro ao buscar dados.' });
    }
    // Retorna o resultado da consulta
    if (results.length === 0) {
      return res.status(404).json({ message: 'Nenhum registro encontrado.' });
    }
    res.status(200).json(results);
  });
});

// >> INSERINDO DADOS - adaptado para a tabela aplicador_Maua
app.post('/imagens', (req, res) => {
  const { atividade, imagem } = req.body; // Extrai os dados do corpo da requisição
  // Validação para garantir que os campos obrigatórios estejam preenchidos
  if (!atividade|| !imagem) {
    return res.status(400).json({ error: 'Os campos Atividade e Imagem são obrigatórios.' });
  }
  // Comando SQL para inserir na tabela aplicador_RPA
  const sql = `INSERT INTO Imagens (atividade, Imagem) VALUES (?, ?)`;
  // Array de valores para preencher os placeholders no comando SQL
  const values = [atividade, imagem];
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});

// >> ATUALIZANDO DADOS - adaptado para a tabela aplicador_Maua
app.put('/imagens/:ID', (req, res) => {
  const { id } = req.params
  const values = [req.body.ID, req.body.atividade, req.body.Imagem];
  const sql = `UPDATE aplicador_PJ SET ID = ?, atividade = ?, Imagem = ?;`;
  db.query(sql, [...values, id], (err, results) => {
    if (err) {
      console.error('Erro ao atualizar dados:', err);
      return res.status(500).json({ error: 'Erro ao atualizar dados.' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Imagem não encontrada.' });
    }
    res.status(200).json({ message: 'Dados atualizados com sucesso!' });
  });
});


app.listen(port, () => console.log(`App rodando na porta ${port} -  http://localhost:${port}/`));