exports.up = function(knex, Promise) {
    return knex.schema.createTable('sneaks', function(table) {
        table.increments();
        table.text('sneaker_name');
        table.integer('peeps_id').references('peeps.id').onDelete('CASCADE');
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableifExists('sneaks');

};
