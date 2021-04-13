exports.up = function(knex) { //essa é a estrutura de um comentário de Adm, para comentar atualizações
    return knex.schema.createTable('commentAtt', function(table){
        table.increments();
        
        //aqui o comentário terá um titulo, uma descrição, não precisando de uma área
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.date('date').notNullable();
        table.string('photo');

        table.string('idAdm').notNullable();
        table.foreign('idAdm').references('id').inTable('ADM');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('commentAtt');
  };