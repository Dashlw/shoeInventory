exports.up = function(knex, Promise) {
    return knex.schema.createTable('peeps', function(table) {
        table.increments();
        table.text('name');
        table.text('email').unique();
        table.text('password');
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableifExists('peeps');

};
