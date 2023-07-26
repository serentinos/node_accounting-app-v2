'use strict';

const Expense = require('./models/expenses.model');
const User = require('./models/user.model');

User.sync({ alter: true });
Expense.sync({ alter: true });
