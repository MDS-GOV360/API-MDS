const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/index');
const sequelize = require('./config/database'); // Configuração do Sequelize para a conexão com o banco

const app = express();

// Middleware
app.use(cors()); // Habilita o CORS
app.use(bodyParser.json()); // Permite ler JSON no corpo das requisições

// Roteamento
app.use('/api', usuarioRoutes); // Roteamento para o arquivo de usuários

// Teste de conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

// Inicia o servidor
const PORT = process.env.PORT || 3000; // Define a porta
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
