const Sequelize = require('sequelize');
const instancia = require('../database');


const columns = {
  empresa: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria: {
    type: Sequelize.ENUM('ração', 'brinquedos'),
    allowNull: false
  }
}

const opcoes = {
  freezeTableName: true,
  tableName: 'fornecedores',
  timestamp: true,
  updatedAt: 'dataAtualizacao',
  createdAt: 'dataCriacao',
  version: 'versao'
}

module.exports = instancia.define('fornecedor', columns, opcoes)