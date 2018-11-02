
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments(); // creates id column that auto-increments
        table.string('name'); // creates name column as varchar(255)
        table.string('email'); // creates email column as varchar(255)
        table.string('password'); // creates password column as varchar(255)
        table.timestamps(true, true); // creates created_at and updated_at columns to use as timestamps
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user');
};
