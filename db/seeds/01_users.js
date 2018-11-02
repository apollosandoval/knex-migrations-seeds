
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Troy', email: 'troy@galvanize.com', password: 'p@ssword123'},
        {name: 'John', email: 'john@galvanize.com', password: 'imeaaaaan'},
        {name: 'Meryl', email: 'meryl@galvanize.com', password: 'appreciatethefact'}
      ]);
    });
};
