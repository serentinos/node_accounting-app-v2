'use strict';

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', '10102012', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
