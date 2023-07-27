'use strict';
require('dotenv').config();

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI);

module.exports = sequelize;
