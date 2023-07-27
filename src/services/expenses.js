'use strict';

const Expense = require('../db/models/expenses.model.js');

const getById = (expenseId) => {
  return Expense.findByPk(expenseId);
};

const getByParams = async(params) => {
  const { userId, category, from, to } = params;

  const allExpenses = await Expense.findAll();

  const filteredExpenses = allExpenses.filter(expense => {
    let isMatch = true;

    if (userId) {
      isMatch = expense.userId === +userId;
    }

    if (category) {
      isMatch = typeof category === 'string'
        ? category === expense.category
        : category.includes(expense.category);
    }

    if (from) {
      const dateFrom = new Date(from);
      const currentDate = new Date(expense.spentAt);

      isMatch = currentDate >= dateFrom;
    }

    if (to) {
      const dateTo = new Date(to);
      const currentDate = new Date(expense.spentAt);

      isMatch = currentDate <= dateTo;
    }

    return isMatch;
  });

  return filteredExpenses;
};

const create = (expenseData) => {
  return Expense.create(expenseData);
};

const remove = (expenseId) => {
  Expense.destroy({
    where: { id: expenseId },
  });
};

const edit = (expenseId, newData) => {
  return Expense.update(newData, {
    where: { id: expenseId },
  });
};

module.exports = {
  create,
  getById,
  remove,
  edit,
  getByParams,
};
