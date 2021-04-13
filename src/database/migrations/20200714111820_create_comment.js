exports.up = function(knex) { //essa é a estrutura de um comentário de usuário
    return knex.schema.createTable('comment', function(table){
        table.increments();
        
        //aqui o comentário terá um titulo, uma descrição e a área a qual foi associado
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('research').notNullable();
        table.date('date').notNullable();
        table.string('photo');

        table.string('conta_id').notNullable();
        table.foreign('conta_id').references('id').inTable('conta');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comment');
  };