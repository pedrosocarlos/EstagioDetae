//principais funções que serão nescessárias para o perfil do user

const connection = require('../database/connection');

module.exports = {
    /**     
     * Função do usuário que mostra todos os posts feitos pelo mesmo
     * essa função é despresivel para o ADM pois haverá apenas uma coluna de publicações do mesmo
     */
    async index(request, response){
        const userId = request.headers.authorization;

        const comments = await connection('comment').where('conta_id', userId).select('*');

        return response.json(comments);
    }


}