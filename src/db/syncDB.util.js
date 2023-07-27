/* eslint-disable no-console */
'use strict';

const Expense = require('./models/expenses.model');
const User = require('./models/user.model');

async function initSync() {
  try {
    await Promise.all(
      User.sync({ alter: true }),
      Expense.sync({ alter: true }),
    );

    console.log('Sucsess db sync!');
  } catch (error) {
    console.log('There was error when db syncing', error);
  }
}

initSync();
