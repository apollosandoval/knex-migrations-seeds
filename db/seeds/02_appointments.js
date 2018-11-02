
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {location: 'Redding', time: '1:23', user_id: 1},
        {location: 'Chandler', time: '4:56', user_id: 2},
        {location: 'Scottsdale', time: '8:29', user_id: 1}
      ]);
    });
};
