const Sequelize = require('sequelize');
let database={};
const sequelize= new Sequelize('postgres','postgres','1234',{
    host: 'localhost',
    dialect: 'postgres',
  });
  const models = require('./models')
database = models(sequelize, Sequelize);
database.Sequelize = Sequelize;
database.authenticate = () => sequelize.authenticate();

module.exports = database;