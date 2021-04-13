exports.up = function(knex) { //essa é a estrutura de um comentário deixado na pag do DETAE
    return knex.schema.createTable('feedBack', function(table){
        
        //aqui o comentário terá um nome, um email e o comentário em si
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('description').notNullable();

        //eu preciso desse id para o delete
        table.increments('idfb');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('feedBack');
  };