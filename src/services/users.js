'use strict';

const User = require('../db/models/user.model.js');

const getAll = async() => {
  return User.findAll({
    attributes: { exclude: 'createdAt' },
  });
};

const getById = (userId) => {
  return User.findOne({
    where: { id: userId },
  });
};

const create = (userName) => {
  return User.create({ name: userName });
};

const remove = (userId) => {
  return User.destroy({
    where: { id: userId },
  });
};

const edit = (userId, newData) => {
  return User.update(newData, {
    where: { id: userId },
  });
};

module.exports = {
  getAll,
  create,
  getById,
  remove,
  edit,
};
