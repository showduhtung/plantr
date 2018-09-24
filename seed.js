const { db, Gardener, Plot, Vegetable } = require('./models');
const Sequalize = require('sequelize');

Vegetable.create({
  name: 'tomato',
  color: 'red',
  // planted_on: Sequalize.NOW,
}).then(vegetable => {
  return Gardener.create({});
});

db.sync({ force: false })
  .then(() => {
    console.log('Database synced!');
    // db.close() // only if using a version of node without `finally`
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ');
    console.log(err);
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => {
    // only if using a version of node WITH `finally`
    db.close();
  });
