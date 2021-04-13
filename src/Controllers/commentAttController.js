//principais funções para criar posts atualizações

const connection = require('../database/connection');

module.exports ={
    /**
     * Listagem de todos os posts de Atualizações encontrados no BD
     * Ele lista no formato de páginas, onde cada uma tem 7 posts
     */
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('commentAtt').count();

        const comments = await connection('commentAtt')
            .limit(7).offset((page - 1) * 7).select('*');
        
        response .header('X-Total-Count', count['count(*)']);

        return response.json(comments);
    },

    /**
     * Função de criação de Post, onde o front deverá retornar algumas informações
     */
    async create(request, response){
        const { title, description, date, photo } = request.body;
        const idAdm = request.headers.authorization;

        const [id] = await connection('commentAtt').insert({
            title, description, date, idAdm, photo });

        return response.json({ id });
    },

    /**
     * Função de delete, onde o Adm pode deletar apenas apos efetuar o log in no sistemas 
     */
    async delete(request, response){
        const { id } = request.params;
        const idAdm = request.headers.authorization;

        const commentAtt = await connection('commentAtt').where('id', id)
            .select('idAdm').first();
        
        if(commentAtt.idAdm !== idAdm){
            return response.status(401).json({ error: 'Denied' });
        }

        await connection('commentAtt').where('id', id).delete();

        return response.status(204).send();
    }
}