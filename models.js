const Sequalize = require('sequelize');
const db = new Sequalize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardeners', {
  name: {
    type: Sequalize.STRING,
    //allowNull = false
  },
  age: {
    type: Sequalize.INTEGER,
    //aSequalize.STRING,
  },
});

const Plot = db.define('plots', {
  size: {
    type: Sequalize.INTEGER,
    //allowNull = false
  },
  shaded: {
    type: Sequalize.BOOLEAN,
    //aSequalize.STRING,
  },
});

const Vegetable = db.define('vegetables', {
  name: {
    type: Sequalize.STRING,
    //allowNull = false
  },
  color: {
    type: Sequalize.STRING,
    //allowNull = false
  },
  planted_on: {
    type: Sequalize.DATE,
    //allowNull = false
  },
});

Plot.belongsTo(Gardener, { through: 'gardenerID' });
Gardener.hasOne(Plot, { through: 'gardenerID' });

Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });

Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });

module.exports = { db, Gardener, Plot, Vegetable };
