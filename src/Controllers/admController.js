//principais funções para Adm, como listagem e criação

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    /**
     * Aqui é a função básica de listagem de todas as contas de ADM 
     */
    async index(request, response) {
        const conta = await connection('ADM').select('*');
    
        return response.json(conta);
    },

/**
 * Aqui é a função básica criação de uma conta de ADM, retornando a senha para o usuário 
 */    
    async create(request, response){
        const {name} = request.body; //pega o nome digitado e passa pro bd

        const id = crypto.randomBytes(4).toString('hex'); //cria uma chave de acesso para o adm

        await connection('ADM').insert({ name, id });//insere o nome e id do adm no BD

        return response.json({ id }); //retorna a chave de acesso daquela nova conta
    }
};