// app.js
const db = require('./db');

// CONSULTA PELO BANCO DE DADOS
db.query('SELECT * FROM testeMesa', (err, results) => {
  if (err) {
    console.error('Erro na consulta:', err);
    return;
  }
  console.log('Resultados:', results);
});



// // INSERINDO DADOS
// const novoUsuario = {
//     id: 456,
//     nome: "João"
//   };
  
//   // SQL para inserir dados
//   // - Os parêntesis devem conter os nomes originais das colunas
//   const sql = 'INSERT INTO testeMesa (cel1, cel2) VALUES (?, ?)';
  
//   db.query(sql, [novoUsuario.id, novoUsuario.nome], (err, results) => {
//     if (err) {
//       console.error('Erro ao inserir dados:', err);
//       return;
//     }
//     console.log('Dados inseridos com sucesso! ID:', results.insertId);
//   });

// Alterando dados
// db.query()

// Fecha o banco de dados quando a conexão termina
db.end();
