const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql')


app.use(cors())

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pck2301',
  database: 'meu_banco'
}); 

app.use(bodyParser.json());

// >> INSERINDO DADOS - adaptado para a tabela aplicador_PJ
app.post('/aplicador/pj/cadastro', (req, res) => {
  // Extrai os dados do corpo da requisição 
  const {
    RG, nome, nacionalidade, estCivil, profissao, CPF, email,
    endereco, cidade, telefone, UF, curriculo, URL, linkedin, 
    portfolio, lattes, valor, empresa, CNPJ, CNAE, 
    nomeResponsavel, emailResponsavel, CPFResponsavel
  } = req.body; 
  // Validação para garantir que os campos obrigatórios estejam preenchidos
  if (!RG || !nome || !CPF) {
    return res.status(400).json({ error: 'Os campos RG, Nome e CPF são obrigatórios.' });
  }
  const sql = `REPLACE INTO aplicador_PJ (RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email, Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin, Portfolio, Lattes, Valor, Empresa, CNPJ, CNAE, NomeResponsavel, EmailResponsavel, CPFResponsavel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  // Array de valores para preencher os placeholders no comando SQL
  const values = [
    RG, nome, nacionalidade, estCivil, profissao, CPF, email,
    endereco, cidade, telefone, UF, curriculo, URL, linkedin, 
    portfolio, lattes, valor, empresa, CNPJ, CNAE, 
    nomeResponsavel, emailResponsavel, CPFResponsavel
  ];
  // Executando o SQL
  db.query(sql, values, (err, results) => {
    if (err) { 
      console.error('Erro ao inserir dados:', err);
  
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }

    return res.status(201).json({ message: 'Dados inseridos com sucesso!' });
    
  }); 
});
// >> INSERINDO DADOS - adaptado para a tabela aplicador_RPA
app.post('/aplicador/rpa/cadastro', (req, res) => {
    // Extrai os dados do corpo da requisição 
    const {
      RG, nome, nacionalidade, estCivil, profissao, CPF, email,
      endereco, cidade, telefone, UF, curriculo, URL, linkedin, 
      portfolio, lattes
    } = req.body; 
    // Validação para garantir que os campos obrigatórios estejam preenchidos
    if (!RG || !nome || !CPF) {
      return res.status(400).json({ error: 'Os campos RG, Nome e CPF são obrigatórios.' });
    }
    const sql = `REPLACE INTO aplicador_rpa (RG, Nome, Nacionalidade, EstCivil, Profissao, CPF, Email, Endereco, Cidade, Telefone, UF, Curriculo, URL, Linkedin, Portfolio, Lattes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    // Array de valores para preencher os placeholders no comando SQL
    const values = [
      RG, nome, nacionalidade, estCivil, profissao, CPF, email,
      endereco, cidade, telefone, UF, curriculo, URL, linkedin, 
      portfolio, lattes
    ];
    // Executando o SQL
    db.query(sql, values, (err, results) => {
      if (err) { 
        console.error('Erro ao inserir dados:', err);
    
        return res.status(500).json({ error: 'Erro ao inserir dados.' });
      }
  
      return res.status(201).json({ message: 'Dados inseridos com sucesso!' });
      
    }); 
})
// >> INSERINDO DADOS - adaptado para a tabela aplicador_IMT
app.post('/aplicador/imt/cadastro', (req, res) => {
  // Extrai os dados do corpo da requisição 
  const {
    RG, email
  } = req.body; 
  // Validação para garantir que os campos obrigatórios estejam preenchidos
  if (!RG || !email) {
    return res.status(400).json({ error: 'Os campos RG e E-mail são brigatorios' });
  }
  const sql = `REPLACE INTO aplicador_maua (RG, Email) VALUES (?, ?)`
  // Array de valores para preencher os placeholders no comando SQL
  const values = [
    RG, email
  ];
  // Executando o SQL
  db.query(sql, values, (err, results) => {
    if (err) { 
      console.error('Erro ao inserir dados:', err);
  
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }

    return res.status(201).json({ message: 'Dados inseridos com sucesso!' });
    
  }); 
})



// INSERINDO DADOS
// Obs: O id não pode começar com 0! (001, 010)
// Obs: O null deve estar minusculo
app.post('/atividade/cadastro', (req, res) => {
  // Extrai os dados do corpo da requisição
  const {
    nome, coordenador, categoria, publicoAlvo,
    descricao, topicos, objetivos, metodologia,
    desafios, recursos, competenciasTecnicas, competenciasTransversais,
    sala, partComunidade, status, horario, video,
    aplicadorRPA, aplicadorPJ, aplicadorMaua_Email, aplicadorMaua_RG
  } = req.body;
  // Validação para no enviar dados vazios
  if (!nome) {
    return res.status(400).json({ error: 'Nome é um campo obrigatório.' });
  }
  // Comando SQL (adaptado para incluir todos os campos da tabela)
  const sql = `
    REPLACE INTO Atividade (
    nome, coordenador, categoria, publicoAlvo,
    descricao, topicos, objetivos, metodologia,
    desafios, recursos, competenciasTecnicas, competenciasTransversais,
    tamanho, partComunidade, status, horario, video,
    aplicadorRPA, aplicadorPJ, aplicadorMaua_Email, aplicadorMaua_RG) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [nome, coordenador, categoria, publicoAlvo,
    descricao, topicos, objetivos, metodologia,
    desafios, recursos, competenciasTecnicas, competenciasTransversais,
    sala, partComunidade, status, horario, video,
    aplicadorRPA, aplicadorPJ, aplicadorMaua_Email, aplicadorMaua_RG]
  // Executando o comando SQL
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});

app.post('/atividade/aprovar', (req, res) => {
  // Extrai os dados do corpo da requisição
  const {
    status, codigo
  } = req.body;
  // Comando SQL (adaptado para incluir todos os campos da tabela)
  const sql = `
    UPDATE Atividade SET
    Status = ?
    WHERE Codigo = ?
  `;
  const values = [status, codigo]
  // Executando o comando SQL
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ error: 'Erro ao inserir dados.' });
    }
    res.status(201).json({ message: 'Dados inseridos com sucesso!', insertId: results.insertId });
  });
});

// BUSCANDO DADOS
app.get('/atividade/consulta', (req, res) => {
  const { rg } = req.query;
  const sql = `
    SELECT * FROM Atividade WHERE (AplicadorRPA = ? OR AplicadorPJ = ? OR AplicadorMaua_RG = ?)
  `;
  db.query(sql, [rg, rg, rg], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return;
    }
    res.send(results);
  });
});

//Coordenadores
app.get('/coordenador/aprovar', (req, res) => {
  const { Coordenador } = req.query;
  const sql = `
    SELECT * FROM Atividade WHERE (Coordenador = ? AND Status = ?)
  `;
  db.query(sql, [Coordenador, "aguardando"], (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados:', err);
      return;
    }
    res.send(results);
  });
});

app.listen(4000, () => {
  console.log("Aplicadores. Porta 4000")
}) 