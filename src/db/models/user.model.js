'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../dbInit');
const Expense = require('./expenses.model');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  updatedAt: false,
});

User.hasMany(Expense, { foreignKey: 'userId' });

module.exports = User;
