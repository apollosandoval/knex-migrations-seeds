
exports.up = function(knex, Promise) {
    return knex.schema.createTable('appointment', (table) => {
        table.increments();
        table.string('location');
        table.time('time');
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE') // tells postgres that if the user our entry is referencing is ever deleted then this appointment should be deleted as well
            .index(); // tells postgres to add an index to the table
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('appointment');
};
