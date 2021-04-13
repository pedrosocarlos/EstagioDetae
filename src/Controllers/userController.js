//principais funções para usuários, como listagem e criação

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    /** 
     * Função de listagem de todos os usuários
     * deve ser usada apenas pela moderação do sistema
     */
    async index(request, response) {
        const conta = await connection('conta').select('*');
    
        return response.json(conta);
    },

    /** 
     * Função de criação de conta de usuário
     */
    async create(request, response){
        const {name} = request.body; //pega o nome digitado e passa pro bd
        
        //Pequena função feita para descobrir se o nome informado é diferente de " "
        const valid = name.localeCompare("");
        if( valid == 0 ) return response.status(400).send()

        const id = crypto.randomBytes(4).toString('hex'); //cria uma chave de acesso para o adm

        await connection('conta').insert({ name, id });//insere o nome e id do adm no BD

        return response.json({ id }); //retorna a chave de acesso daquela nova conta
    }
};