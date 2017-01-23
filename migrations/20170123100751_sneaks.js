exports.up = function(knex, Promise) {
    return knex.schema.createTable('sneaks', function(table) {
        table.increments();
        table.text('sneaker_name').notNullable();
        table.text('img_url').notNullable();
        table.integer('peeps_id').references('peeps.id').onDelete('CASCADE');
    })

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('sneaks');

};
