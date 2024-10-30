// db.js
const mysql = require('mysql2');

// Crie a conexão
const connection = mysql.createConnection({
  host: 'localhost',    // ou o endereço do seu servidor MySQL
  user: 'root',  // seu usuário do MySQL
  password: 'imtdb', // sua senha do MySQL
  database: 'testeDB' // o banco de dados que você deseja usar
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

module.exports = connection;
