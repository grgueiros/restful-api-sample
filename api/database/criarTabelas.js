const Fornecedores = require('../models/fornecedoresModel')

Fornecedores.sync()
  .then(() => console.log('Tabela de fornecedores criada com sucesso'))
  .catch(erro => console.log(erro))