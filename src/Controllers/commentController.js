//principais funções para criar posts em publicações e notícias

const connection = require('../database/connection');

module.exports ={

    /**
     * Listagem de todos os posts de publicações e noticias encontrados no BD
     * Ele lista no formato de páginas, onde cada uma tem 7 posts
     */
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('comment').count();

        const comments = await connection('comment')
            .limit(7).offset((page - 1) * 7).select('*');
        
        response .header('X-Total-Count', count['count(*)']);

        return response.json(comments);
    },

    /**
     * Função de criação de Post, onde o front deverá retornar algumas informações
     */
    async create(request, response){
        const { title, description, research, date , photo} = request.body;
        const conta_id = request.headers.authorization;

        const [id] = await connection('comment').insert({
            title, description, research, date, conta_id, photo});

        return response.json({ id });
    },

    /**
     * Função de delete, onde o usuário pode deletar apenas apos efetuar o log in no sistemas 
     */
    async delete(request, response){
        const { id } = request.params;
        const conta_id = request.headers.authorization;

        const comment = await connection('comment').where('id', id)
            .select('conta_id').first();
        
        if(comment.conta_id !== conta_id){
            return response.status(401).json({ error: 'Denied' });
        }

        await connection('comment').where('id', id).delete();

        return response.status(204).send();
    }
}