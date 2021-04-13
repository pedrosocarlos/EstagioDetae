const connection = require('../database/connection');

module.exports = {

    /**
     * Função criada para criar uma variável que guarde o nome do ADM 
     * Ele retorna o "profile" no front, que deve ser deletado para fins de logout   
     * */
    async create(request, response){
        const { id } = request.body;

        const profile = await connection('ADM').where('id', id)
            .select('name').first();

        if(!profile){
            return response.status(400).json({ error: 'No profiles found with informed id' });
        }

        return response.json(profile);
    }
}