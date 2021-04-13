//principais funções para criar posts em publicações e notícias

const connection = require('../database/connection');

module.exports ={

    /** 
     * Função para listagem de mensagem de feedback feito por qualquer usuário
     */
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('feedBack').count();

        const feedbacks = await connection('feedBack').select('*');

        return response.json(feedbacks);
    },

    /** 
     * Função para criação de mensagem de feedback feito por qualquer usuário, mesmo sem login
     * Aqui ele pode ser feito a qualquer momento
     * É PRECISO SER TRATADO NO FRONT PARA NÃO SOBRECARREGAR O BACK
     */
    async create(request, response){
        const { name, email, description } = request.body;

        const [id] = await connection('feedBack').insert({ //confirmação da inserção
            name, email, description });

            return response.json({ id });
    },

    /**
     * Aqui qualquer um com acesso pode deletar o comentário deixado
     */
    async delete(request, response){
        const { id } = request.params;

        await connection('feedBack').where('idfb', id).delete();

        return response.status(204).send();
    }
}