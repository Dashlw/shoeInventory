exports.up = function(knex, Promise) {
    return knex.schema.createTable('peeps', function(table) {
        table.increments();
        table.text('name').notNullable();
        table.text('email').unique();
        table.text('password').notNullable();
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('peeps');

};
