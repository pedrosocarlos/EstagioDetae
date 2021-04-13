const knex = require('knex');
const configuration = require('../../knexfile');

/** 
 * Sistema de conexão do banco onde funciona no formato de migrations
 * cada uma funciona como uma tabela do banco, encapsulando o acesso ao banco
 */

const connection = knex(configuration.development);

module.exports = connection;